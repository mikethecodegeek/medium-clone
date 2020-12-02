'use strict';
module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define(
        'Article',
        {
            body: DataTypes.TEXT,
            title: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            imgLink: DataTypes.STRING,
        },
        {}
    );
    Article.associate = function (models) {
        // associations can be defined here
        Article.belongsTo(models.User, { foreignKey: 'userId' });
        Article.hasMany(models.Like, { foreignKey: 'articleId' });
        Article.hasMany(models.Comment, { foreignKey: 'articleId' });
    };
    return Article;
};
