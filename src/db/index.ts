import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "haobanjia",
  database: "postApp",
  host: "127.0.0.1",
  dialect: "postgres",
});
