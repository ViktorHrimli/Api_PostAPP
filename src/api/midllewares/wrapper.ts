import { Request, Response, NextFunction } from "express";

type BaseType = {
  req: Request;
  res: Response;
  next: NextFunction;
};

const wrapper = (controller: any) => {
  return ({ req, res, next }: BaseType) => {
    try {
      controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export { wrapper };
