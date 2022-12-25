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
const blogSchema = mongoose.Schema({
    date: {
        type: String,
  
    },
    name: {
        type: String,
        unique: true
    },
    content: {
        type: String,
    },
    author: userSchema
})
const blog = mongoose.models.blog || mongoose.model('blog', blogSchema)
module.exports = blog