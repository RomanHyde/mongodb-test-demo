const express = require('express');
const router = express.Router();
const Song = require('./models/song');
const User = require('./models/user');

// Song route section
// pull song info
router.get('/', async (req, res) => {
    const songs = await Song.find({});
    // res.status(200).render('login');
    // res.status(200).send('Hello World!');
    res.status(200).json(songs);
});


// post song information first and then confirm
router.post('/', async (req, res) => {
    try {
        const song = new Song({
            artistName: req.body.artistName,
            song: req.body.song,
            album: req.body.album
        });
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json(error);
    }
});

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