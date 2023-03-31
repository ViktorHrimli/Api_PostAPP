const multer = require("multer");

import { uuid } from "uuidv4";

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads/");
  },
  filename: (req: any, file: any, cb: any) => {
    const [, extension] = file.originalname.split(".");

    cb(null, `${uuid()}.${extension}`);
  },
  limits: {
    fileSize: process.env.SIZE_UPLOAD_IMG,
  },
});

const upload = multer({ storage: storage });

export { upload };
