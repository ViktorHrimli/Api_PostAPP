import { Model, DataTypes } from "sequelize";
import { sequelize } from "../index";

class Users extends Model {}
class Avatar extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    urlAvatar: {
      type: DataTypes.STRING,
      references: "Avatar",
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

Avatar.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: DataTypes.INTEGER,
    urlAvatar: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Avatar",
  }
);

export { Avatar, Users };
