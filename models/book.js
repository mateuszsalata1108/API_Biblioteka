const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    tytuł: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    strony: {
        type: Number,
        required: true
    },
    bestseller: {
        type:Boolean,
        required: true
    },
    data_dodania: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', bookSchema);