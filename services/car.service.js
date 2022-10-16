const carModel=require('../models/car.model')

const addCar=async(payload)=>{
    return await carModel.create(payload)
}


const getAllCar=async()=>{
    return await carModel.find()
}

const getMyCar=async(user)=>{
    return await carModel.find({user:user})
}


module.exports={addCar,getAllCar,getMyCar}