const mongoose = require('mongoose');
const Song = require('./song');

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        //bio won't be added automatically upon sign up so this setting has been changed to false
        required: false,
    },
    favouriteSongs: [{
        type: mongoose.Types.ObjectId,
        ref: 'songs',
        //fave songs won't be added automatically upon sign up so this setting has been changed to false
        required: false
    }]
});

module.exports = mongoose.model('users', User);