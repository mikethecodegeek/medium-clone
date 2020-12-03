const csrf = require('csurf');
const asyncHandler = (handler) => (req, res, next) =>
    handler(req, res, next).catch(next);
const csrfProtection = csrf({ cookie: true });
const blockRoute = (req,res,next) => {
    if (!req.session.auth) {
        res.redirect('/users/login');
    } else {
        next();
    }
}

module.exports = {
    asyncHandler,
    csrfProtection,
    blockRoute
};
