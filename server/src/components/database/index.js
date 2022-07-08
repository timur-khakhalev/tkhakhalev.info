const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION.toString())

module.exports = mongoose
