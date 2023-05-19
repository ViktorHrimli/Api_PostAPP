import express from "express";

// MIDLLEWARES
import { wrapper, validation, auth } from "../midllewares";
// CONTORLLERS
import { signInCntr, signUpCntr, uploadPhoto } from "../controllers";
// SHEMS
import { schemaSignIng, schemaSignUp } from "../shems/validation";

import { upload } from "../helpres";

const router = express.Router();

// REGISTRATION
router.post("/signin", validation(schemaSignIng), wrapper(signInCntr));
// LOGIN
router.post("/signup", auth, validation(schemaSignUp), wrapper(signUpCntr));
// LOGOUT
router.post("/logout", auth, wrapper);
// UPLOAD AVATAR
router.post("/avatar", auth, upload.single("avatar"), wrapper(uploadPhoto));

export { router as authRouters };
