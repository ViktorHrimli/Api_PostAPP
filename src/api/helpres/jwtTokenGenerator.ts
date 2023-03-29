import jwt from "jsonwebtoken";

const { SECRET_TOKEN_KEY = "adaw@141" } = process.env;

class TokenGenerator {
  private username: string;
  private email: string;

  constructor(email: string, username: string) {
    this.email = email;
    this.username = username;
  }

  createToken() {
    const { email, username } = this;

    const token = jwt.sign({ email, username }, SECRET_TOKEN_KEY, {
      expiresIn: "30d",
    });

    return token;
  }
}

export { TokenGenerator };
