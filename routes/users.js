var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const { asyncHandler, csrfProtection } = require('./utils');
const { check, validationResult } = require('express-validator');

const { User } = require('../db/models');
const { loginUser } = require('../auth');

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
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom((value) => {
            return User.findOne({ where: { email: value } }).then((user) => {
                if (user) {
                    return Promise.reject(
                        'The provided Email Address is already in use by another account'
                    );
                }
            });
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
    res.render('signup', { csrfToken: req.csrfToken(), user: {} });
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

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                firstName,
                lastName,
                userName,
                email,
                hashedPassword,
            });
            loginUser(req, res, user);
            // req.session.user = user;
            res.json({ user });
            // res.redirect('/')
        } else {
            const errors = validatorErrors.array().map((error) => {
                console.log(error.msg);
                return error.msg;
            });
            const user = { firstName, lastName, userName, email };
            res.render('signup', {
                title: 'Sign Up',
                user,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

router.get('/login', csrfProtection, (req, res) => {
    res.render('login', { csrfToken: req.csrfToken(), userName: '' });
});

const loginValidators = [
    check('userName')
        .exists({
            checkFalsy: true,
        })
        .withMessage('Please provide a value for username'),
    check('password')
        .exists({
            checkFalsy: true,
        })
        .withMessage('Please provide a value for password'),
];

router.post(
    '/login',
    csrfProtection,
    loginValidators,
    asyncHandler(async (req, res) => {
        const { userName, password } = req.body;

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            const user = await User.findOne({ where: { userName } });
            if (user) {
                let hash = user.hashedPassword;
                await bcrypt.compare(password, hash, function (err, result) {
                    if (!result) {
                        let err = new Error('Please try again');
                        // res.redirect('/users/sign_in', {err})
                        // return res.send(err);
                        res.render('login', {
                            title: 'Login',
                            userName,
                            errors,
                            csrfToken: req.csrfToken(),
                        });
                    } else {
                        loginUser(req, res, user);
                        // res.json({ user });
                        return res.redirect('/');
                    }
                });
            }
        } else {
            errors = validatorErrors.array().map((err) => {
                console.log(err.msg);
                return err.msg;
            });
            res.render('login', {
                title: 'Login',
                userName,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    })
);

router.post('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/');
});

module.exports = router;
