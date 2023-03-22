import { Sequelize } from "sequelize";

const { USER_DB, PASSWORD_DB, HOST, PORT_DB } = process.env;

export const sequelize = new Sequelize({
  host: HOST,
  port: parseFloat(PORT_DB!),
  password: PASSWORD_DB,
  dialect: "postgres",
  username: USER_DB,
  database: "postgres",
});
