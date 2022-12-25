const User = require("../models/user")
const blog = require("../models/blogs")
const bcrypt  = require("bcryptjs")
async function loginController(req,res){
    const {user, password} = req.body
    const author =await User.findOne({name: user})
    console.log(user)
    console.log(author)
    const validator = await bcrypt.compare( password, author.password)
    console.log(validator)
    if(validator){
        req.session.user = user
        req.session.save()
        const blogs = await blog.find({ author : author})
        console.log(blogs)
        res.render("myblogs",
        {title : "login", loggedin: true, blogs: blogs})

    }
}
module.exports = loginController
