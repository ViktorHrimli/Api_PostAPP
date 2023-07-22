import express from "express";
import { auth, wrapper, validation } from "../midllewares";

const router = express.Router();

import { PostController } from "../controllers";

// GET ALL POSTS
// router.get("/posts", auth, wrapper(getPosts));
// // GET BY ID
// router.get("/posts/:id", auth, wrapper(getPostById));
// // NEW POST
// router.post("/posts", wrapper(createPost));

export { router as postsRouter };
