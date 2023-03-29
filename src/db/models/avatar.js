"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "users",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Avatar.init(
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Avatar",
    }
  );
  return Avatar;
};
