var express = require('express');
var router = express.Router();

const { asyncHandler } = require('./utils');
const { User, Article,FollowingUser } = require('../db/models');

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const articles = await Article.findAll({
            limit: 6,
            include: User,
            orderBy: 'id'
        });
        let following;
        if (req.session.auth) {

            following = await FollowingUser.findAll({where:{followerId:req.session.auth.userId},include:User})
        }
        
        res.render('index', { title: 'Poedium Home', articles,following });
    })
);

module.exports = router;
