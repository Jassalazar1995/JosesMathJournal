const User = require( '../models/User' )

viewProfile = async ( req,res ) => {
    console.log('get /api/user')
    try {
        const foundUser = await User.findById(req.id)
        console.log(req)
        res.status( 200 ).json({
            username: foundUser.username,
            email: foundUser.email,
            level: foundUser.score.level,
            points: foundUser.score.points
        })

    } catch ( error ) {
        res.status( 500 ).json({ error: 'Error fetching user' })
        console.log( error.message )
    }
}

updateProfile = async ( req, res ) => {
    try {
        // Ensure only the profile fields are updated
        const profileUpdates = req.body.profile
        const user = await User.findByIdAndUpdate(
            req.id,
            { $set: { "profile": profileUpdates } },
            { new: true, runValidators: true}
        ).select(`-password`)

        if ( !user ) {
            return res.status( 404 ).json({ message: 'User not found'})
        }

        res.json( user )
    } catch ( error ) {
        res.status( 500 ).json({ error: error.message })
    }
}

module.exports = {
    viewProfile,
    updateProfile
}