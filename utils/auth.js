const jwt= require('jsonwebtoken');

const encodeToken = (payload)=>{
  return jwt.sign({email:payload.email,user_id:payload._id}, process.env.JWT_SECRET )

}

module.exports ={encodeToken }