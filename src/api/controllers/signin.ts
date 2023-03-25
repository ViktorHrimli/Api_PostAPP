import { Request, NextFunction, Response } from "express";

import { singInService } from "../services";

const signInCntr = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await singInService(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.json(error.message);
  }
};

export { signInCntr };
