import { DataTypes } from "sequelize";

import { sequelize } from "..";

export const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  activeProfile: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
});

export const Post = sequelize.define("post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

export const Avatar = sequelize.define("avatar", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasOne(Avatar);
Avatar.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);
