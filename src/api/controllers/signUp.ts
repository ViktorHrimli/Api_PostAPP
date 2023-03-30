import { Request, NextFunction, Response } from "express";

import { singUpService } from "../services";

const signUpCntr = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await singUpService(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.json(error.message);
  }
};

export { signUpCntr };
