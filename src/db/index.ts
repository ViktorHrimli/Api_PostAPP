import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: "34.88.232.6",
  port: 5432,
  password: "haobanjia",
  dialect: "postgres",
});
