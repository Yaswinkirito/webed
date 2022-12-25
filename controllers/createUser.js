const bcrypt = require("bcryptjs")
const user = require("../models/user")
const blog = require("../models/blogs")
const mockdata = [{name: "My best day", body: "Nice evenings and a great partner", slug: 1},{name: "My worst day", body: "Storms and dissapointing people", slug: 2}]
const createUser = async (req, res) => {
    const { name, email, password } = req.body

    const hashedpassword = await bcrypt.hash(password, 6)
    user.create({ name: name, email: email, password: hashedpassword }).then(async (response) => {
        req.session.user = name
        req.session.email = email
        req.session.save()
        const author = await user.findOne({name: name})
        const blogs = await blog.find({ author : author})
        return res.render("myblogs",{
            title: "blogs", loggedin: true, blogs: blogs
        })
    }
    ).catch(err => {
        console.log(err)
        return res.send({message:"Couldn't create user"})
    }
    )
}
module.exports = createUser