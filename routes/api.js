const express = require('express');
const { Article, Comment } = require('../db/models');
const { asyncHandler, csrfProtection, blockRoute } = require('./utils');
const router = express.Router();

router.post('/new-comment', asyncHandler(async(req, res) => {
    const {userId,articleId,body}=req.body.comment;
    const comment = await Comment.create({userId,articleId,body});
    res.json({comment});
}));

module.exports = router