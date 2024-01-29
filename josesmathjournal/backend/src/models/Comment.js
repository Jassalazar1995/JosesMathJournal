
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
