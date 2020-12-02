const express = require('express');
const {Article, Comment, FollowingUser, Like, User } = require('../db/models');
const { asyncHandler, csrfProtection} = require('./utils')

const router = express.Router();


router.post('/articles', 
csrfProtection, 
asyncHandler (async (req, res) => {
    
    await Article.create({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId

    })
   res.redirect('/articles:id')
}))
