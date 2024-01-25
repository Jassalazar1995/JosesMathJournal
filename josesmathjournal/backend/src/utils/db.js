// MongoDB connection
const mongoose = require('mongoose')

const mongoConfig = async() => {
    console.log(process.env.MONGO_URL)
    try{
        const result = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected: ${result.connection.host}`)
    } catch(err) {
        console.log(`Mongo error: ${err}`)
    }
}

module.exports = mongoConfig