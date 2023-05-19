import { singInService } from "../../services";
import { BaseConfig } from "../../types";

const signInCntr = async ({ req, res, next }: BaseConfig) => {
  try {
    const user = await singInService(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { signInCntr };
