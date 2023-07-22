import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

const { sequelize } = require("../../../db/models");

import { error404, error500 } from "../../../api/helpres/apiErrors";

const { PORT } = process.env;

interface Routers {
  routers: [];
}
class ServerApp {
  #app: Express;
  #routers: [];

  constructor({ routers }: Routers) {
    this.#app = this.#initialApp();
    this.#routers = routers;

    this.#initialPluginApp();
    this.#initialRouters();
    this.#errorsHendler();
  }

  get App() {
    return this.#app;
  }

  #initialApp = () => {
    return express();
  };

  #initialPluginApp = () => {
    this.#app.use(express.json());
    this.#app.use(morgan("dev"));
    this.#app.use(cors());
    dotenv.config();
  };

  #initialRouters = () => {
    this.#app.use(this.#routers);
  };

  #errorsHendler = () => {
    this.#app.use(error404);
    this.#app.use(error500);
  };

  async start() {
    try {
      await sequelize.sync({ alter: true, logging: false });
      console.log("Connection has been established successfully.");

      this.#app.listen(PORT, () => {
        console.log(`Server listen on port ${PORT}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      process.exit(1);
    }
  }
}

module.exports = { ServerApp };
