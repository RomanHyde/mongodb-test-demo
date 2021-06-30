const mongoose = require('mongoose');
const { Schema } = require('mongoose');

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
    },
    numberOneFan: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
});

module.exports = mongoose.model('songs', Song);