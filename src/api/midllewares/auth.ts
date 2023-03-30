const { User } = require("../../db/models");

import { Response, NextFunction } from "express";
import { HttpError, TokenGenerator } from "../helpres";
import { IUserInfo, UserRequest } from "../types";

const tokens = new TokenGenerator();

const auth = async (req: UserRequest, res: Response, next: NextFunction) => {
  const { authorization = "" } = req.headers;

  const [Bearer, token] = authorization.split(" ");

  try {
    if (!token || Bearer !== "Bearer") {
      return next(HttpError(401, "Please provide a token!"));
    }

    const user: IUserInfo = tokens.decodeToken(token);

    if (!user) {
      return next(HttpError(401, "Filed decode token"));
    }

    const person = await User.findOne({ where: { id: user?.id }, raw: true });

    if (!person) {
      return next(HttpError(401, "Invalid token"));
    }

    req.user = person;

    next();
  } catch (error) {
    next(HttpError(401, "Invalid token"));
  }
};

export { auth };
