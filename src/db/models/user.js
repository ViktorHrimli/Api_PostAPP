"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Avatar, Post }) {
      this.hasOne(Avatar, {
        foreignKey: "userId",
        as: "avatars",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });

      this.hasMany(Post, {
        foreignKey: "userId",
        as: "posts",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activeProfile: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
