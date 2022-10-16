const express = require('express');
const router =express.Router();
const {addCarController,allCarController,myCarController} = require('../controller/car.controller')
const {validate}=require('../middleware/validation.middleware');
const { signInValidation,addCarValidation } = require('../utils/validation');
const auth = require('../middleware/auth.middlware')


router.route('/allCar').get(allCarController)
router.get("/myCar" , validate(addCarValidation,'body'),auth,myCarController);
router.post("/addCar" , validate(addCarValidation,'body'),auth,addCarController);
module.exports = router