const express = require("express")
const app = express()
const ejs = require("ejs")
const dbConnect = require("./utils/dbConnect")
const user = require("./models/user")
const bcrypt = require("bcryptjs")
const router = require("./routes/route")
app.set("view engine", 'ejs')
app.use(express.static(__dirname+"/views"));
app.use(express.urlencoded({ extended: false}))
app.use(require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(router)

dbConnect().then(()=>app.listen(3000)).catch(err=>console.log(err))
