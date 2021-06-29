const mongoose = require('mongoose');

const song = new mongoose.Schema({
    artistName: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('songs', song);