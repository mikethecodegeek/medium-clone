const express = require('express');
const { Article, Comment, Like } = require('../db/models');
const { asyncHandler, csrfProtection, blockRoute } = require('./utils');
const router = express.Router();

router.post(
    '/new-comment',
    asyncHandler(async (req, res) => {
        const { userId, articleId, body } = req.body.comment;
        const comment = await Comment.create({ userId, articleId, body });
        res.json({ comment });
    })
);

router.post(
    '/like',
    asyncHandler(async (req, res) => {
        const { userId, articleId } = req.body;

        let like = await Like.findOne({ userId, articleId });

        if (!like) {
            like = await Like.create({ userId, articleId });
        }

        const totalLikes = await Like.findAll({ where: articleId });

        likeCount = totalLikes.length



        // console.log(like);

        res.json({ like });
    })
);

router.delete(
    '/unlike',
    asyncHandler(async (req, res) => {
        const { userId, articleId } = req.body;
        const likes = await Like.findAll({ where: { userId, articleId } });
        likes.forEach(async (el) => await el.destroy());
        res.json({ message: 'Deleted' });
    })
);

module.exports = router;
