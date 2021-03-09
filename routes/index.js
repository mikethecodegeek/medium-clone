var express = require('express');
var router = express.Router();
const sequelize = require('sequelize');
const { asyncHandler } = require('./utils');
const { User, Article,FollowingUser } = require('../db/models');
const { Op } = require("sequelize");

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const articles = await Article.findAll({
            where: {
                id: { [Op.lt]: 8 }
            },
            limit: 6,
            include: User,
            // order:[ [ sequelize.fn('RANDOM') ] ]
        });
        let following;
        if (req.session.auth) {

            following = await FollowingUser.findAll({where:{followerId:req.session.auth.userId},include:User})
        }
        
        res.render('index', { title: 'Poedium Home', articles,following });
    })
);

module.exports = router;
