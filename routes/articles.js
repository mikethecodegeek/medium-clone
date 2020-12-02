const express = require('express');
const {Article, Comment, FollowingUser, Like, User } = require('../db/models');
const { asyncHandler, csrfProtection} = require('./utils')
const router = express.Router();

router.get('/', 
csrfProtection, 
asyncHandler (async (req, res) => {
    res.render('articles', {token: req.csrfToken(), article: {}})
}))



router.post('/', 
csrfProtection, 
asyncHandler (async (req, res) => {
    const articleId = parseInt(req.params.id)
    await Article.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId,
        token: req.csrfToken()

    })
   res.redirect('/:id')
}))


module.exports = {
    router

}