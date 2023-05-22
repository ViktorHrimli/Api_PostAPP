import jwt from "jsonwebtoken";

import { IUserInfo } from "../types";

const { SECRET_TOKEN_KEY = "adaw@141" } = process.env;

class TokenGenerator {
  public createToken(registerUser: IUserInfo) {
    const { email, id, username, uuid } = registerUser;

    const token = jwt.sign({ email, id, username, uuid }, SECRET_TOKEN_KEY, {
      expiresIn: "7d",
    });

    return token;
  }

  public refreshToken() {}

  public decodeToken(token: string): any {
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
