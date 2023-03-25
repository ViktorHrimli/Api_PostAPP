import { Request, Response, NextFunction } from "express";

const error500 = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
};

const error404 = (_: any, res: Response, __: any) => {
  return res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api/contacts or /api/users",
    data: "Not found",
  });
};

export { error500, error404 };
