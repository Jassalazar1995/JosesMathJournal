
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
   body: { type: String },
   user: { type: String, default: 'Bob' },
   // comments field here
}, { timestamps: true })

const Post = mongoose.model('posts', postSchema)

module.exports = Post