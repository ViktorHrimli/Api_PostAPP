import { Users } from "../../db/model";

import bycrypt from "bcrypt";

interface IUser {
  email: string;
  password: string;
  username: string;
}

const singInService = async ({ email, password, username }: IUser) => {
  const hashPassword: string = await bycrypt.hash(password, 7);
  const urlAvatar = "awdawdawd";
  console.log(hashPassword);
  const registerUser = await Users.create({
    email: email,
    password: hashPassword,
    username: username,
    urlAvatar: urlAvatar,
  });

  console.log(registerUser);

  return registerUser;
};

export { singInService };
