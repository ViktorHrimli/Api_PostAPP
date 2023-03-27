import { Request, Response, NextFunction } from "express";
import { HttpError } from "../helpres";
type HeadersType = {
  Bearer?: string;
  token?: string;
};

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization = "" } = req.headers;

  const [Bearer, token] = authorization.split("");

  if (!token || Bearer !== "Bearer") {
    next(HttpError(401, "Please provide a token!"));
  }
};

export { auth };
