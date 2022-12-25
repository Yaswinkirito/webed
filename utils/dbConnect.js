const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = async ()=>{
    mongoose.connect(process.env.MONGO_URI)
}
module.exports = dbConnect