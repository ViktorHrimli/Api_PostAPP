import { Users } from "../../db/model";

interface IUser {
  email: string;
  password: string;
  username: string;
}

const singUpService = async ({ email, username, password }: IUser) => {};

export { singUpService };
