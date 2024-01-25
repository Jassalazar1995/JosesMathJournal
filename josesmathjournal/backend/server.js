const express = require('express');
const app = express();
require('dotenv').config()
const mongoConfig = require('./src/utils/db')

const PORT = 5000;

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
    mongoConfig()
})
