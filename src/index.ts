
import * as crypto from "crypto";
import * as fs from "fs";

import * as express from "express";
import * as multer from "multer";
import { PRIVATE_KEY } from "./rsakey";

const PORT = 8080;

const app = express();
const router = express.Router();

// multer upload middleware
const upload = multer({ storage: multer.memoryStorage()});

// routes
router.post(
  "/api/v1/logs",
  upload.single("logFile"),
  async (req: express.Request, res: express.Response) => {

    const licenseKey = req.header("X-LICENSE-KEY");
    if (!licenseKey) {
      console.warn("Missing X-LICENSE-KEY in header");
      throw new Error("Missing X-LICENSE-KEY in header");
    }
    const encrypted_aes_key = req.body.encryptedAesKey;
    const encrypted_aes_iv = req.body.encryptedAesIv;
    console.log('encrypted_aes_key', encrypted_aes_key);
    console.log('encrypted_aes_iv', encrypted_aes_iv);
    const decrypted_aes_key = crypto.privateDecrypt(PRIVATE_KEY, Buffer.from(encrypted_aes_key, 'hex'));
    const decrypted_aes_iv = crypto.privateDecrypt(PRIVATE_KEY, Buffer.from(encrypted_aes_iv, 'hex'));
    const decipher = crypto.createDecipheriv('aes-256-cbc', decrypted_aes_key, decrypted_aes_iv);
    let zip = decipher.update(req.file.buffer);
    zip = Buffer.concat([zip, decipher.final()]);

    fs.writeFileSync("log.zip", zip);

    console.log("Successfully uploaded log", req.file.fieldname, "size", req.file.size);

    return res.status(200);
    }
);

app.use(router);

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  }
  