const express = require("express")
const createBlog = require("../controllers/createBlog")
const createUser = require("../controllers/createUser")
const loginController = require("../controllers/loginController")
const mainpagecontroller = require("../controllers/mainpagecontroller")
const blog = require("../models/blogs")
const user = require("../models/user")

const router = express.Router()
const mockdata = [{name: "My best day", body: "Nice evenings and a great partner", slug: 1},{name: "My worst day", body: "Storms and dissapointing people", slug: 2}]
router.get("/", mainpagecontroller)
router.get("/login", (req,res)=>res.render("login", {title : "login", loggedin: false}))
router.post("/login", loginController)
router.get("/register", (req,res)=>res.render("register", {title : "login", loggedin: false}))
router.post("/register", createUser)
router.get("/createBlog", async (req,res)=>{
    res.render("createBlog", {title : "createBlog", loggedin: true})
    
})
router.get("/blogs", async (req,res)=>{
    const author = await user.findOne({ name: req.session.user }) 
    const blogs = await blog.find({ author : author})
    res.render("myblogs", {title : "login", loggedin: false, blogs: blogs})
})
router.post("/blog", createBlog)
module.exports = router