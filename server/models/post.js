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
        required: false,
    },
});

const Post = mongoose.model('Posts', postSchema);

module.exports = {Post};