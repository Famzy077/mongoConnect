const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
    Mobile: {
        type: String
    },
    Model: {
        type: String
    },
    Version: {
        type: String
    },
    Price: {
        type: Number
    },
    Category: {
        type: String,
    },
    Year: {
        type: Number
    },
    Price: {
        type: Number
    }
})
module.exports = mongoose.model('Product',  productSchema)