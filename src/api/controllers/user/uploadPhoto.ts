import { BaseConfig } from "../../types";
import { uploadPhotoOnCloud } from "../../utils";

const fs = require("fs/promises");

const uploadPhoto = async ({ req, res, next }: BaseConfig) => {
  try {
    const url = uploadPhotoOnCloud(req.file.path, req.user?.email!);

    await fs
      .unlink(req.file.path)
      .then((result: any) => console.log("fileDestroy"));

    return url;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { uploadPhoto };
