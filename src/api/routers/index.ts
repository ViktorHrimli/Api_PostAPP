import express from "express";

import { wrapper, validation } from "../midllewares";

import { signInCntr } from "../controllers";

const router = express.Router();

// REGISTRATION
router.post("/signin", signInCntr);
// LOGIN
router.post("/signup", wrapper);
// LOGOUT
router.post("/logout", wrapper);
// UPLOAD AVATAR
router.post("/avatar", wrapper);

export { router as userRouters };
