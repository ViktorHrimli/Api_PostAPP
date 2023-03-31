import { Response } from "express";

import { UserRequest } from "../types";
import { uploadPhotoOnCloud } from "../utils";

const uploadPhoto = async (req: UserRequest, res: Response) => {
  try {
    const url = uploadPhotoOnCloud(req.file.path, req.user?.email!);
    console.log(url);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { uploadPhoto };
