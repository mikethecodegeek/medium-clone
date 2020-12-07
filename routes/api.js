const express = require('express');
const { Article, Comment, Like, User, FollowingUser } = require('../db/models');
const { asyncHandler, csrfProtection, blockRoute } = require('./utils');
const router = express.Router();
const { Op } = require('sequelize');
const followinguser = require('../db/models/followinguser');

router.post(
    '/new-comment',
    asyncHandler(async (req, res) => {
        const { userId, articleId, body } = req.body.comment;
        const comment = await Comment.create({ userId, articleId, body });
        res.json({ comment });
    })
);

router.post(
    '/follow-user',
    asyncHandler(async (req, res) => {
        const { userId, followerId } = req.body;
        const follow = await FollowingUser.create({ userId, followerId });
        res.json({ follow });
    })
);

router.post(
    '/unfollow-user',
    asyncHandler(async (req, res) => {
        const { userId, followerId } = req.body;
        const unfollow = await FollowingUser.findOne({where:{userId, followerId }});
        await unfollow.destroy();
        res.json({ unfollow });
    })
);

router.post(
    '/like',
    asyncHandler(async (req, res) => {
        const { userId, articleId } = req.body;

        let like = await Like.findOne({
            where: {
                userId: { [Op.eq]: userId },
                articleId: { [Op.eq]: articleId },
            },
        });

        if (!like) {
            like = await Like.create({ userId, articleId });
        }

        res.json({ like });
    })
);

router.delete(
    '/unlike',
    asyncHandler(async (req, res) => {
        const { userId, articleId } = req.body;
        const likes = await Like.findOne({ where: { userId, articleId } });
        await likes.destroy();
        res.json({ message: 'Deleted' });
    })
);

module.exports = router;
