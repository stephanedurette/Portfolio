const path = require('path');
const express = require('express')
const app = express()

require('dotenv').config();

//middleware
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + "/public/index.html")
    })

//listen
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
