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
      res.status(403).json({ status: "filed", msg: "Incorrect password!" });
    }

    const user = await singUpService(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { signUpCntr };
