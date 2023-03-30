import bycrypt from "bcrypt";

export class ManagerHashPassword {
  public async hashPassword(password: string) {
    const hashPassword: string = await bycrypt.hash(password, 7);
    return hashPassword;
  }
  public async definitionPassword(inputPassword: string, hashPassword: string) {
    const check: boolean = await bycrypt.compare(inputPassword, hashPassword);

    return check ? true : false;
  }
}
