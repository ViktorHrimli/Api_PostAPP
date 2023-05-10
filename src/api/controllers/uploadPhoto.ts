import { Response } from "express";

import { UserRequest } from "../types";
import { uploadPhotoOnCloud } from "../utils";

const fs = require("fs/promises");
const path = require("path");

const deletePath = path.join(__dirname, "../../uploads/");

const uploadPhoto = async (req: UserRequest, res: Response) => {
  try {
    const url = uploadPhotoOnCloud(req.file.path, req.user?.email!);
    console.log(deletePath + req.file.filename);

    await fs
      .unlink(req.file.path)
      .then((result: any) => console.log("fileDestroy"));
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { uploadPhoto };
