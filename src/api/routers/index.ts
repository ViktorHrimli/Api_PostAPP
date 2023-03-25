import express from "express";

import { wrapper, validation } from "../midllewares";

import { signInCntr } from "../controllers";

import { schemaSignIng } from "../shems/validation";

const router = express.Router();

// REGISTRATION
router.post("/signin", validation(schemaSignIng), wrapper(signInCntr));
// LOGIN
router.post("/signup", wrapper);
// LOGOUT
router.post("/logout", wrapper);
// UPLOAD AVATAR
router.post("/avatar", wrapper);

export { router as userRouters };
