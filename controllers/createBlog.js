const blog = require("../models/blogs")
const user = require("../models/user")
async function createBlog(req,res){
   
        const author = await user.findOne({name: req.session.user})
        const {date, name, content} = req.body
        blog.create({
            date: date,
            name: name,
            content: content,
            author: author
        }).then(response=>console.log(response)).catch(err=>console.log(err))
    return res.redirect("/")
}
module.exports = createBlog