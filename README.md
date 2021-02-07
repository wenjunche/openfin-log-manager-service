# openfin-log-manager-service

This repo is an example of node service that supports OpenFin application log management.  More detauls about log managemnent can be found [here](https://developers.openfin.co/docs/log-management)

## Installation and build

1.  `npm install`
2.  `npm run build`

## Start example service

1.  Run `npm run start`

## Testing from an OpenFin application

1. Add the the following "logManagement" to the application manifest.  "encryptionKey" is from src/rsakey.ts

~~~
    "logManagement": {
      "enabled": true,
      "url":"http://localhost:8080/",
      "encryptionKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv0tTGvATNb3Ii6kmUb6qCQjJsMJfF2fo8mYZzuBPFUtdDIi4qxwbLJV+DlE3msOtFM9RMtUF4ptQTCR/mfnkwlI40OcX3fhiEzwZRHqDpdlxyqf8s5jluRLBZMpqL2qYIRYnU3pA0wd/MjVZ4Ii6BnS/LDTFa8pgT9FHkrtnGQdqHfc4WShIrwH38ARhJp5c+D/dCv+1LgCKPRO1/kibq2GAeJ1jxtVcwwX+lJl/nu/7a/xNIZVSYShGNXWAIIJXnfvfQ72OX88I8p27VsybKetBCNvD0X0y6Ah5wl3QVfs662a4TNzUuLQZalgcz0InQmyBzh/Hx7TCf73EgOeRGwIDAQAB"
    },
~~~

2. Start the OpenFin application and invoke console.log to log some text.

3. Close the OpenFin application, and RVM should zip app logs and send the zip file to this service at http://localhost:8080/

4. log.zip should be created in the root directory that contains the app log.

## Upload request payload

RVM uploads app logs via HTTP POST request, with the destination set in startup_app.logManagement.url.  This example uses [multer](https://www.npmjs.com/package/multer) to parse multipart/form-data.

The HTTP POST request has the following field in the header:
~~~~
"X-LICENSE-KEY": "license-key"  // {string} A license key for the OpenFin application
~~~~

The request body has the following payload, set by multer
~~~
encryptedAesKey:  HEX encoded AES key, encrypted with the public key
encryptedAesIv:   HEX encoded AES IV,  encrypted with the public key
file: app log info.
    fieldname: file name
    size: file size
    buffer: has content of zipped log file, encrypted with encryptedAesKey and encryptedAesIv
~~~

More details on encryption can be found in [here](https://developers.openfin.co/docs/log-management#section-encryption).

