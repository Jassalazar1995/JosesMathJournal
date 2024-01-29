// To manage the logic for user scores and achievements.
const User = require('../models/User')

addPoints = async (userId, points) => {
    const user = await User.findById(Id);
    if(!user){
        return res.status( 404 ).json({ message: 'User not found'})
    }

    user.score.points += points
    await user.save()

    return user.score


}
// const { addPoints } = require('./scoreController');

// Example: Inside a function where a user completes an action
// await addPoints(userId, 10);  // Add 10 points to user's score
