import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { userRouters } from "./api/routers";
import { error404, error500 } from "./api/helpres/apiErrors";

dotenv.config();

const app: Express = express();

// moduls
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routers
app.use("/api", userRouters);

// Errors
app.use(error404);
app.use(error500);

export { app };
