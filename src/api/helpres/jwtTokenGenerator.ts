import jwt from "jsonwebtoken";

import { IUserInfo } from "../types";

const { SECRET_TOKEN_KEY = "adaw@141" } = process.env;

class TokenGenerator {
  createToken(user: IUserInfo) {
    const { email, id, username, uuid } = user;

    const token = jwt.sign({ email, id, username, uuid }, SECRET_TOKEN_KEY, {
      expiresIn: "30d",
    });

    return token;
  }

  decodeToken(token: string): any {
    const decodeToken = jwt.verify(token, SECRET_TOKEN_KEY, (err, data) => {
      if (err) {
        return null;
      } else {
        return data;
      }
    });

    return decodeToken;
  }
}

export { TokenGenerator };
