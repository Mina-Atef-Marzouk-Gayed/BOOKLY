const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming you have a User model

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'TOKEN', async (err, decodedToken) => {
        if (err) {
            console.log(err.message);
            res.redirect('/signIn');
        } else {
            try {
            const user = await User.findById(decodedToken.id);
            if (user && user.email === 'admin@bookly.com') {
                next();
            } else {
                res.status(403).send('Forbidden');
            }
            } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
            }
        }
        });
    } else {
        res.redirect('/signIn');
    }
};



module.exports = { requireAuth };