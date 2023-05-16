import { Request, NextFunction, Response } from "express";

import { singInService } from "../services";
import { uploadPhotoOnCloud } from "../utils";
import { UserRequest } from "../types";

const signInCntr = async (req: UserRequest, res: Response) => {
  try {
    const user = await singInService(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { signInCntr };
