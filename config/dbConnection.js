const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/store')
        return connect
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
module.exports = connectDb
