const express = require('express');
const { Article } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils');
const router = express.Router();

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const article = await Article.findByPk(req.params.id);
        res.render('article-single', { article });
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

router.get('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    res.render('article-edit', { token: req.csrfToken(), article });
}))

router.post('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const article = await Article.findByPk(req.params.id);
    await article.update({ title, body });
    res.redirect(`/articles/${req.params.id}`);
}))

module.exports = router;
