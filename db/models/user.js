'use strict';
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
    // User.hasMany(models.Like, { foreignKey: 'userId' })
    // User.hasMany(models.Comment, { foreignKey: 'userId' })
    // User.hasMany(models.Article, { foreignKey: 'userId' })
    // User.hasMany(models.Follower, { foreignKey: 'userId' })
  };
  return User;
};
