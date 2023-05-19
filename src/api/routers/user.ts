import express from "express";

// MIDLLEWARES
import { wrapper, auth } from "../midllewares";
// CONTORLLERS
import { uploadPhoto } from "../controllers";

import { upload } from "../helpres";

const router = express.Router();

// UPLOAD AVATAR
router.post("/avatar", auth, upload.single("avatar"), wrapper(uploadPhoto));

export { router as userRouters };
