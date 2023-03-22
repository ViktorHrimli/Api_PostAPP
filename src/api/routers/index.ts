import express from "express";

import { wrapper } from "../midllewares";

const router = express.Router();

// REGISTRATION
router.post("/signin", wrapper);
// LOGIN
router.post("/signup", wrapper);
// LOGOUT
router.post("/logout", wrapper);
// UPLOAD AVATAR
router.post("/avatar", wrapper);

export { router as userRouters };
