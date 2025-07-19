const {Router} = require("express")

const courseRouter = Router();


courseRouter.post("/purchase",(req,res) => {
    res.json(
        {
            "message":"you have clickes purchase endpoint"
        }
    )
})

courseRouter.get("/courses",(req,res) => {

})

module.exports = {
    courseRouter:courseRouter
}