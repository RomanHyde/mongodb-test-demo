const mongoose = require('mongoose');
const User = require('./user');

const Song = new mongoose.Schema({
    artistName: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true,
        unique: true
    },
    album: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('songs', Song);