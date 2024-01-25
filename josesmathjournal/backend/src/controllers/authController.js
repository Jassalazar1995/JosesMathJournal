const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function register(req,res) {
    try {
        // 1. Check if the user exists
        // 2. If they don't (new user... good!) encrypt the password
        // 3. Add new user to the database (with the encrypted password)
        // 4. Generate a JWT token (the keys... permission slip... wrist band) and returning it to the user  
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: err.message })
    }
    
}

async function login(req, res) {
    try {
        // 1. Check if user exists
        // 2. Check if the password provided by user matches the one in the database
        // 3. Generate a JWT token and return it to the user
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: err.message })
    }


}
