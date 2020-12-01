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
  res.render("sign_in");
});

router.post("/sign_in", async (req, res) => {
  const {userName,email,password} = req.body;
  console.log(userName,email,password)
  const errors = []
  const user = await User.findOne({where: {email}});
  if (!user) {
    let err = new Error('Please try again');
    // res.redirect('/users/sign_in', {err})
    return res.send('no way')
  } else {
    let hash = user.hashedPassword;
    await bcrypt.compare(password, hash, function(err, result) {
      // result == true
      // return res.send(result)
      if (!result) {
        let err = new Error('Please try again');
        // res.redirect('/users/sign_in', {err})
        return res.send(err)
      } else {
        req.session.user = user;
        res.json({user});
      }
   });
    
  }
})



module.exports = router;
