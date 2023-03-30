const { User } = require("../../db/models");

import { TokenGenerator, HttpError } from "../helpres";

const tokens = new TokenGenerator();
const singUpService = async (id: number) => {
  const person = await User.findOne({ where: { id: id }, raw: true });

  if (!person) {
    throw HttpError(400, "User not found!");
  }

  const token = tokens.createToken(person);

  return { data: person, token };
};

export { singUpService };
