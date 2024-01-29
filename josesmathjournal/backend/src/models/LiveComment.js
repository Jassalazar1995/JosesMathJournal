const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    text: { type: String },
    user: { type: String, default: 'Bob' }
}, { timestamps: true })
