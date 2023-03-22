import { Request, Response, NextFunction } from "express";

type BaseType = {
  req: Request;
  res: Response;
  next: NextFunction;
};

const wrapper = (controller: any) => {
  return async ({ req, res, next }: BaseType) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export { wrapper };
