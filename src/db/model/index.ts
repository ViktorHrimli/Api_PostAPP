import { Model, DataTypes } from "sequelize";
import { sequelize } from "../index";

class User extends Model {}
class Avatar extends Model {}

User.init(
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
    modelName: "User",
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

export { Avatar, User };
