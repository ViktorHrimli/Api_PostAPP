import { app } from "./index";

const { sequelize } = require("./db/models");

const { PORT } = process.env;

const main = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server listen on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
