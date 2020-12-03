const express = require('express');
const { Article, Comment } = require('../db/models');
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

router.post("/new", blockRoute, csrfProtection, asyncHandler(async (req, res) => {
    const { title, body, userId } = req.body;
    const newArticle = await Article.create({ body, title, userId });
    res.redirect(`/articles/${newArticle.id}`)
}));

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const article = await Article.findByPk(req.params.id,{include: Comment});
        const comments = article.Comments.map(comm => {return {userId: comm.userId,articleId:comm.articleId,body:comm.body}})
        res.render('article-single', { article, comments });
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

router.get('/:id/edit', blockRoute, csrfProtection, asyncHandler(async (req, res) => {
    const article = await Article.findByPk(req.params.id);
    if (req.session.auth.userId == article.userId) {
        res.render('article-edit', { token: req.csrfToken(), article });
    } else {
        res.send('Sorry you cannot edit this article')
    }
}))

router.post('/:id/edit', blockRoute, csrfProtection, asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const article = await Article.findByPk(req.params.id);
    if (req.session.auth.userId == article.userId) {
        await article.update({ title, body });
        res.redirect(`/articles/${req.params.id}`);
    } else {
        res.send('Sorry you cannot edit this article')
    }
}))

const articleInteractions = {
    like: false,
    likeCount: 0
    //comment: [],
};

router.patch("/:id/like", (req, res) => {
    articleInteractions.likeCount += 1;
    res.json({ like: articleInteractions.likeCount });
});

router.patch("/:id/unlike", (req, res) => {
    articleInteractions.likeCount -= 1;
    res.json({ like: articleInteractions.likeCount });
});

module.exports = router;
