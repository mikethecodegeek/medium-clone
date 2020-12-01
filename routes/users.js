var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const {User} = require('../db/models')
/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.json({users});
});

router.get("/new",(req, res) => {
  res.render("signup");
});

router.post("/new", async (req, res) => {
  const {userName,email,password,confirmedPassword} = req.body;
  console.log(userName,email,password)
  const errors = []
  const newUser = await User.findOne({where: {email}});
  if (newUser) {
    const err = new Error('User already exists');
    res.redirect('/users/new', {errors})
  } else {
    let hashedPassword = await bcrypt.hash(password, 10);
    const user =await User.create({userName,email,hashedPassword})
    req.session.user = user;
    res.json({user});
  }
})

router.get("/sign_in",(req, res) => {
  res.render("signin");
});

router.post("/sign_in", async (req, res) => {
  const {userName,email,password} = req.body;
  console.log(userName,email,password)
  const errors = []
  const newUser = await User.findOne({where: {email}});
  if (!newUser) {
    const err = new Error('Please try again');
    res.redirect('/users/sign_in', {errors})
  } else {
    let hashedPassword = await bcrypt.hash(password, 10);
    const user =await User.create({userName,email,hashedPassword})
    req.session.user = user;
    res.json({user});
  }
})



module.exports = router;
