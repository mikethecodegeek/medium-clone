'use strict';
module.exports = (sequelize, DataTypes) => {
    const FollowingUser = sequelize.define(
        'FollowingUser',
        {
            userId: DataTypes.INTEGER,
            followerId: DataTypes.INTEGER,
        },
        {}
    );
    FollowingUser.associate = function (models) {
        // associations can be defined here
        FollowingUser.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return FollowingUser;
};
