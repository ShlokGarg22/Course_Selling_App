const {Router} = require("express")

const adminRouter = Router();

adminRouter.post("/signup",(req,res) => {
    res.json({
        "message":"this is the admin route"
    })
})
adminRouter.post("/signin",(req,res) => {
    res.json({
        "message":"this is the admin route"
    })
})
adminRouter.post("/course",(req,res) => {
    res.json({
        "message":"this is the admin route"
    })
})
adminRouter.put("/course",(req,res) => {
    res.json({
        "message":"this is the admin route"
    })
})
adminRouter.get("/course/bulk",(req,res) => {
    res.json({
        "message":"this is the admin route"
    })
})

module.exports = {
    adminRouter: adminRouter
}