const {getUser}=require('../services/user.service')
const {encodeToken} = require('../utils/auth')

const signin =async ( req,res )=>{
let {email,password} = req.body
email=email.toLowerCase()
console.log(email)
const user = await getUser(email,password)
if (user){
    const token =await encodeToken(user)
    res.status(200).json({token:token})
}
else{
    res.status(404).json({message:'Invalid Credentials'})
}
}


module.exports={signin}


