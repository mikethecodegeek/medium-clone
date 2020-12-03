const express = require('express');
const { Article } = require('../db/models');
const { asyncHandler, csrfProtection, blockRoute } = require('./utils');
const router = express.Router();


router.get(
    '/new',
    blockRoute,
    csrfProtection,
    asyncHandler(async (req, res) => {
        res.render('articles', { token: req.csrfToken(), article: {} });
    })
    );

router.post("/new",blockRoute, csrfProtection, asyncHandler(async(req, res) => {
    const {title,body,userId} = req.body;
    const newArticle = await Article.create({body,title,userId});
    res.redirect(`/articles/${newArticle.id}`)
}));   
    
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const article = await Article.findByPk(req.params.id);
        res.render('article-single', { article });
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

        res.redirect(`/articles/${newArticle.id}`);
    })
);

router.get('/:id/edit',blockRoute, csrfProtection, asyncHandler(async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    res.render('article-edit', { token: req.csrfToken(), article });
}))

router.post('/:id/edit',blockRoute, csrfProtection, asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const article = await Article.findByPk(req.params.id);
    await article.update({ title, body });
    res.redirect(`/articles/${req.params.id}`);
}))

module.exports = router;
