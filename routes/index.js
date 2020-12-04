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
            orderBy: 'id'
        });

        res.render('index', { title: 'Poedium Home', articles });
    })
);

module.exports = router;
