const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Posts', postSchema);