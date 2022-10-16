const express = require('express');
const router =express.Router();
const {signin} = require('../controller/user.controller')
const {validate}=require('../middleware/validation.middleware');
const { signInValidation } = require('../utils/validation');


router.post("/signin", validate(signInValidation,'body'),signin);
module.exports = router