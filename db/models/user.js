'use strict';

const followinguser = require("./followinguser");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article, { foreignKey: 'userId' })
    // User.belongsToMany(models.User, { as:'follow', through: 'followingUser.followerId' })
  };
  return User;
};
