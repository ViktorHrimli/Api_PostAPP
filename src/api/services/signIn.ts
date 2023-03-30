const gravatar = require("gravatar");
const { User } = require("../../db/models");

import bycrypt from "bcrypt";

import { TokenGenerator } from "../helpres";

interface IUser {
  email: string;
  password: string;
  username: string;
}

const singInService = async ({ email, password, username }: IUser) => {
  const tokens = new TokenGenerator();

  const hashPassword: string = await bycrypt.hash(password, 7);

  const urlGravatar = gravatar.url(email, { s: "100", protocol: "http" });

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
