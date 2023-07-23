import { Controller } from "../../../libs/packages/controller/controller.api";

import { singUpService, singInService } from "../../services";

import { IUserInfo, BaseConfig } from "../../types";
import { ManagerHashPassword } from "../../helpres";

const hash = new ManagerHashPassword();

class AuhtController extends Controller {
  constructor() {
    super();

    this.addRouter({}, this.signInCntr);
    this.addRouter({});
  }

  signUpCntr = async ({ req, res, next }: BaseConfig) => {
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

  signInCntr = async ({ req, res, next }: BaseConfig) => {
    try {
      const user = await singInService(req.body);

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
}
