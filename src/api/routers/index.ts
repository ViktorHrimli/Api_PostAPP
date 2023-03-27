import express from "express";

// MIDLLEWARES
import { wrapper, validation, auth } from "../midllewares";
// CONTORLLERS
import { signInCntr } from "../controllers";
// SHEMS
import { schemaSignIng } from "../shems/validation";

const router = express.Router();

// REGISTRATION
router.post("/signin", auth, validation(schemaSignIng), wrapper(signInCntr));
// LOGIN
router.post("/signup", wrapper);
// LOGOUT
router.post("/logout", wrapper);
// UPLOAD AVATAR
router.post("/avatar", wrapper);

export { router as userRouters };
