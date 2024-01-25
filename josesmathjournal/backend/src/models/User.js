const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')



const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profile: {
        bio: String,
        pronouns: String
    },
    score: {
        points: { type: Number, default: 0 },
        level: { type: Number, default: 1 }
    },
    achievements: [{ type: String }]
})

const User = mongoose.model('User', userSchema)

module.exports = User