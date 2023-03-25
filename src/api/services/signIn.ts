const { User } = require("../../db/models");

import bycrypt from "bcrypt";

interface IUser {
  email: string;
  password: string;
  username: string;
}

const singInService = async ({ email, password, username }: IUser) => {
  const hashPassword: string = await bycrypt.hash(password, 7);
  const urlAvatar = "awdawdawd";

  const registerUser = await User.create({
    email: email,
    password: hashPassword,
    username: username,
    avatarUrl: urlAvatar,
  });

  return registerUser;
};

export { singInService };
