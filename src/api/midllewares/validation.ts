import { Response, Request, NextFunction } from "express";

import { HttpError } from "../helpres";

const validation = (shema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = shema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }

    next();
  };
};

export { validation };
