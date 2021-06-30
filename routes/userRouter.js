const express = require('express');
const router = express.Router();
const User = require('../models/user');

// User route Section
// pull user info
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

// post song information first and then confirm
router.post('/', async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
            bio: req.body.bio,
            favouriteSongs: req.body.favouriteSongs
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
