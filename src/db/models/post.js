const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User }) {
      this.hasOne(User, {
        foreignKey: "userId",
        as: "posts",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );

  return Post;
};
