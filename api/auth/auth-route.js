
require('dotenv').config();


const jwt = require('jsonwebtoken');

module.exports = {
auth
};

// from env
const secret = process.env.SECRET;

// verify token for user
function auth(req, res, next) {
const token = req.headers.authorization;

if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
    if (err) {
        res.status(401).json({ message: 'You are not verified' });
    } else {
        req.decodedJwt = decodedToken;
        next();
    }
    });
} else {
    res.status(401).json({ message: 'You are not verified' });
}
}
