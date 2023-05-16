import Joi from "joi";
import { shemaRegex } from "./regex";

const schemaSignIng = Joi.object({
  email: Joi.string().email().regex(shemaRegex.email).required(),
  password: Joi.string().regex(shemaRegex.password).required(),
  username: Joi.string()
    .alphanum()
    .regex(shemaRegex.username)
    .min(3)
    .max(30)
    .required(),
  photo: Joi.string(),
});

const schemaSignUp = Joi.object({
  email: Joi.string().email().regex(shemaRegex.email).required(),
  password: Joi.string().regex(shemaRegex.password).required(),
});

export { schemaSignIng, schemaSignUp };
