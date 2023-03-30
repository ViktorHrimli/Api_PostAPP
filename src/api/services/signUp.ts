interface IUser {
  email: string;
  password: string;
}

const singUpService = async ({ email, password }: IUser) => {};

export { singUpService };
