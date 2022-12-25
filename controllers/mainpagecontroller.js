const mainpagecontroller = (req,res)=>{
    res.render('index', { name : 'Vinay', title: "Homepage", loggedin: true})
}
module.exports = mainpagecontroller