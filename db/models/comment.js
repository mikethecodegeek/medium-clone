'use strict';
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            userId: DataTypes.INTEGER,
            articleId: DataTypes.INTEGER,
            body: DataTypes.TEXT,
        },
        {}
    );
    Comment.associate = function (models) {
        // associations can be defined here
        Comment.belongsTo(models.Article, { foreignKey: 'articleId' });
        Comment.belongsTo(models.User, {foreignKey: 'userId'})
    };
    return Comment;
};
