const express = require('express');
const router = express.Router();
const Song = require('../models/song');

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
            album: req.body.album,
            numberOneFan:req.body.numberOneFan
        });
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;