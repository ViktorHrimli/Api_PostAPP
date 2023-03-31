import { Response } from "express";

import { singUpService } from "../services";
import { UserRequest, IUserInfo } from "../types";
import { ManagerHashPassword } from "../helpres";

const hash = new ManagerHashPassword();

const signUpCntr = async (req: UserRequest, res: Response) => {
  try {
    const { password, id }: IUserInfo = req.user!;

    const checkPassword = await hash.definitionPassword(
      req.body.password,
      password
    );

    if (!checkPassword) {
      res.status(401).json({ status: "filed", msg: "Filed token!" });
    } else {
      const user = await singUpService(id);
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export { signUpCntr };
