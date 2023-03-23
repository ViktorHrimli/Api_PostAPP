import { Sequelize } from "sequelize";

const { USER_DB, PASSWORD_DB, HOST, PORT_DB } = process.env;

export const sequelize = new Sequelize("postApp", "postgres", "haobanjia", {
  host: HOST,
  port: parseFloat(PORT_DB!),
  dialect: "postgres",
});
