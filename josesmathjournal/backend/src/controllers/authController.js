const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateToken(newUser) {
    const payload = { id: newUser._id, username: newUser.username }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3000 })
}

async function register(req,res) {
    try {
        // 1. Check if the user exists
        const foundUser = await User.findOne({ username: req.body.username })
        
        if ( foundUser ) {
            return res.status( 400 ).json({ error: 'User already exists'})
        }

        // 2. If they don't (new user... good!) encrypt the password
        const encryptedPassword = await bcrypt.hash( req.body.password, 12 )

        // 3. Add new user to the database (with the encrypted password)
        const newUser = await User.create({ ...req.body, password: encryptedPassword })
        
        // 4. Generate a JWT token (the keys... permission slip... wrist band) and returning it to the user  
        const token = generateToken( newUser )
        res.status( 200 ).json({ token })

    } catch ( error ) {
        console.log( error.message )
        res.status( 400 ).json({ error: error.message })
    }
    
}

async function login( req, res ) {
    try {
        // 1. Check if user exists
        const foundUser = await User.findOne({ username: req.body.username })
        if( !foundUser ){
            return res.status( 404 ).json({ error: 'No such user exists' })
        }

        // 2. Check if the password provided by user matches the one in the database
        const validPass = await bcrypt.compare(req.body.password, foundUser.password)

        if( !validPass ) {
            return res.status( 400 ).json({ error: 'Invalid credentials' })
        }

        // 3. Generate a JWT token and return it to the user
        const token = generateToken(foundUser)

        res.status( 200 ).json({ token })

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message })
    }
}




module.exports = {
    register,
    login
}
