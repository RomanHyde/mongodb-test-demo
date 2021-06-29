const express = require('express');
const router = express.Router();
const Song = require('./models/song');

// pull user info
router.get('/', async (req, res) => {
    const songs = await Song.find({});
    // res.status(200).render('login');
    // res.status(200).send('Hello World!');
    res.status(200).json(songs);
});

// post user information first and then confirm
router.post('/',(req,res) => {
    let artistName = req.body.artistName;
    let song = req.body.song;
    let album = req.body.album;
    let song = new Song({
        artistName : artistName,
        song : song,
        album : album
        });
    user.save();
    res.status(201).send('I created a thing!');
});

module.exports = router;