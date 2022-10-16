const userModel=require('../models/user.model')
const getUser=async(email,password)=>{
    return await userModel.findOne({email:email , password:password})
}


module.exports={getUser}