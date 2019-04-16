module.exports = {
    checkRole
};

  // check role against decoded token
function checkRole(role) {
    return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
        next();
    } else {
        res.status(403).json({ message: 'you do not have access' });
    }
    };
}