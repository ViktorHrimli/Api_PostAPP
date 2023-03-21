import { app } from "./index";
import { sequelize } from "./db";

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(5000, () => {
      console.log("Server listen on port 5000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
