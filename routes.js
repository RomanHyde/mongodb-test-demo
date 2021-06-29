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
    const song = new Song({
        artistName : req.body.artistName,
        song : req.body.song,
        album : req.body.album
        });
    song.save();
    res.status(201).json(song);
});

module.exports = router;