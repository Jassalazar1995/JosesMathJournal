const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who liked the post
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);