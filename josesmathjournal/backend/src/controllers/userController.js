const User = require( '../models/User' )

viewProfile = async ( req,res ) => {
    try {
        
    } catch (error) {
        res.status( 500 ).json({ error: 'Error fetching user' })
    }
}