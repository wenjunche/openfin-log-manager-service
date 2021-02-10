
import * as crypto from "crypto";
import * as fs from "fs";

import * as express from "express";
import * as multer from "multer";
import * as uuid from "uuid";
import { PRIVATE_KEY } from "./rsakey";

const PORT = 8080;

const app = express();
const router = express.Router();

// multer upload middleware
const upload = multer({ storage: multer.memoryStorage()});

// routes
router.post(
  "/api/v1/logs",
  upload.single("logFile"),  // multer middleware for logFile
  async (req: express.Request, res: express.Response) => {
    const encrypted_aes_key = req.body.encryptedAesKey;
    const encrypted_aes_iv = req.body.encryptedAesIv;
    // decrypt both decrypted_aes_key and decrypted_aes_iv first
    const decrypted_aes_key = crypto.privateDecrypt(PRIVATE_KEY, Buffer.from(encrypted_aes_key, 'hex'));
    const decrypted_aes_iv = crypto.privateDecrypt(PRIVATE_KEY, Buffer.from(encrypted_aes_iv, 'hex'));
    // then decrypt file content with decrypted_aes_key and decrypted_aes_iv
    const decipher = crypto.createDecipheriv('aes-256-cbc', decrypted_aes_key, decrypted_aes_iv);
    let zip = decipher.update(req.file.buffer);
    zip = Buffer.concat([zip, decipher.final()]);

    fs.writeFileSync("log.zip", zip);

    console.log("Successfully uploaded log", req.file.fieldname, "size", req.file.size);
    return res.json({response: {id: uuid.v4()}});
  }
);

app.use(router);

if (require.main === module) {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
}
  