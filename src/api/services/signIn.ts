const gravatar = require("gravatar");
const { User } = require("../../db/models");

// locals
import { TokenGenerator, ManagerHashPassword } from "../helpres";
import { IUser } from "../types";

// instans
const tokens = new TokenGenerator();
const hash = new ManagerHashPassword();

const singInService = async ({ email, password, username }: IUser) => {
  const urlGravatar = gravatar.url(email, { s: "100", protocol: "http" });
  const hashPassword = await hash.hashPassword(password);

  const registerUser = await User.create({
    email: email,
    password: hashPassword,
    username: username,
    avatarUrl: urlGravatar,
  });

  const token = tokens.createToken(registerUser);

  return { data: registerUser, token };
};

export { singInService };
