import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { userRouters } from "./api/routers";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("api", userRouters);

export { app };
