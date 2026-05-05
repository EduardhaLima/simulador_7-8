const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    genres: [String],
    image: String,
    video: String
});

module.exports = mongoose.model('movie', MovieSchema);