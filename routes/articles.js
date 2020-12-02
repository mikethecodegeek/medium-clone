const express = require('express');
const { Article } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        res.render('articles', { token: req.csrfToken(), article: {} });
    })
);

router.get(
    '/new',
    csrfProtection,
    asyncHandler(async (req, res) => {
        res.render('articles', { token: req.csrfToken(), article: {} });
    })
);

router.post(
    '/',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const newArticle = await Article.create({
            title: req.body.title,
            body: req.body.body,
        });

        res.redirect(`/${newArticle.id}`);
    })
);

module.exports = router;
