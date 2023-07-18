import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { userRouters, postsRouter, authRouters } from "./api/routers";
import { error404, error500 } from "./api/helpres/apiErrors";
import { postController } from "./api/controllers/post/test/index";

dotenv.config();

const app = express();

// moduls
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routers
app.use("/api", authRouters);
app.use("/api", postController.getRouters());
app.use("/api", userRouters);

// Errors
app.use(error404);
app.use(error500);

export { app };
