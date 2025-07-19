const {Schema} = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.OjectId

const userSchema = Schema(
    {
        email:{type:String , unique:true},
        password:String,
        firstName:String,
        lastName:String
        
    }
)
const courseSchema = Schema(
    {
        title:String,
        description:String,
        price:Number,
        imageUrl:String,
        creatorId:ObjectId
    }
)
const adminSchema = Schema(
    {
        email:{type:String , unique:true},
        password:String,
        firstName:String,
        lastName:String
    }
)
const purchaseSchema = Schema(
    {
        userId:ObjectId,
        courseId:ObjectId

    }
)

const userModel = mongoose.Model("user",userSchema)
const courseModel = mongoose.Model("admin",courseSchema)
const adminModel = mongoose.Model("course",adminSchema)
const purchaseModel = mongoose.Model("purchase",purchaseSchema)


module.exports{
    userModel,
    courseModel,
    adminModel,
    purchaseModel
    
}