const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    imię: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    hasło: {
        type: String,
        required: true,
        max: 1024,
        min: 6

    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);