var express = require('express');
var router = express.Router();


const { asyncHandler } = require('./utils');

const { User, Article } = require('../db/models');

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const articles = await Article.findAll({
            limit: 6,
            include: User,
        });

        res.render('index', { title: 'a/A Express Skeleton Home', articles });
    })
);

module.exports = router;
