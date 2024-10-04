const express = require('express')
const app = express()
require('dotenv').config()
const connectDb = require('./config/dbConnection')
const PORT = process.env.PORT || 5001
const productHandler = require('./routes/productRoute')

connectDb()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('product', productHandler)
app.listen(PORT, () => {
    console.log(`App running on port ${PORT} `)
})



