var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');

const { User } = require('../db/models');
/* GET users listing. */
router.get('/', async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
});

const userValidators = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name')
        .isLength({ max: 50 })
        .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Last Name')
        .isLength({ max: 50 })
        .withMessage('Last Name must not be more than 50 characters long'),
    check('userName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for User Name')
        .isLength({ max: 50 })
        .withMessage('Last Name must not be more than 50 characters long'),
    check('emailAddress')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom((value) => {
            return db.User.findOne({ where: { emailAddress: value } }).then(
                (user) => {
                    if (user) {
                        return Promise.reject(
                            'The provided Email Address is already in use by another account'
                        );
                    }
                }
            );
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        .withMessage(
            'Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'
        ),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 50 })
        .withMessage(
            'Confirm Password must not be more than 50 characters long'
        )
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }),
];

router.get('/new', csrfProtection, (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken() });
});

router.post(
    '/new',
    csrfProtection,
    userValidators,
    asyncHandler(async (req, res) => {
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            confirmedPassword,
        } = req.body;

        console.log(1)

        const validatorErrors = validationResult(req);

        console.log(2)

        if (validatorErrors.isEmpty()) {

            console.log(3)

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                firstName,
                lastName,
                userName,
                email,
                hashedPassword,
            });
            req.session.user = user;
            res.json({ user });
        } else {

            console.log(4)

            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('signup', {
                title: 'Sign Up',
                // user,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

router.get('/sign_in', (req, res) => {
    res.render('sign_in');
});

router.post('/sign_in', async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(userName, email, password);
    const errors = [];
    const user = await User.findOne({ where: { email } });
    if (!user) {
        let err = new Error('Please try again');
        // res.redirect('/users/sign_in', {err})
        return res.send('no way');
    } else {
        let hash = user.hashedPassword;
        await bcrypt.compare(password, hash, function (err, result) {
            // result == true
            // return res.send(result)
            if (!result) {
                let err = new Error('Please try again');
                // res.redirect('/users/sign_in', {err})
                return res.send(err);
            } else {
                req.session.user = user;
                res.json({ user });
            }
        });
    }
});

module.exports = router;
