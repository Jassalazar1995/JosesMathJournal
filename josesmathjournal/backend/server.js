const express = require('express');
const app = express();
require('dotenv').config()
const mongoConfig = require('./src/utils/db')

// importing routes
const authRoutes = require( './src/routes/authRoutes' );
const userRoutes = require( './src/routes/userRoutes' );
const blogRoutes = require('./src/routes/blogRoutes')
const commentRoutes = require('./src/routes/commentRoutes')
// const donationRoutes = require('./src/routes/donationRoutes');


const { authorize } = require( './src/middleware/authMiddleware' )

const PORT = 5000;

app.use(express.json())

// Test
app.get('/api/test', (req,res) => {
    console.log('test')
    res.json('Hello World!')
})  

// Auth routes
app.use('/auth', authRoutes)



// User routes
app.use('/api/users', authorize, userRoutes)

// Blog routes
app.use('/api/blogs', authorize, blogRoutes)

// Comment routes
app.use('/api/', authorize, commentRoutes)

// Donate routes
// app.use('/api', donationRoutes);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
    mongoConfig()
})
