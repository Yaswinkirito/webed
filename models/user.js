const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
 
    }
})
const user = mongoose.models.user || mongoose.model('user', userSchema)
module.exports = user