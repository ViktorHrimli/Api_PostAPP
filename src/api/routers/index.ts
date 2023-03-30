import express from "express";

// MIDLLEWARES
import { wrapper, validation, auth } from "../midllewares";
// CONTORLLERS
import { signInCntr, signUpCntr } from "../controllers";
// SHEMS
import { schemaSignIng } from "../shems/validation";

const router = express.Router();

// REGISTRATION
router.post("/signin", validation(schemaSignIng), wrapper(signInCntr));
// LOGIN
router.post("/signup", auth, wrapper(signUpCntr));
// LOGOUT
router.post("/logout", wrapper);
// UPLOAD AVATAR
router.post("/avatar", auth, wrapper);

export { router as userRouters };
