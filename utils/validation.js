const { required } = require("joi");
const Joi = require("joi");

exports.signInValidation = Joi.object()
    .keys({
        email: Joi.string()
            .required(),
        password: Joi.string()
            .required()
    });



exports.addCarValidation = Joi.object()
    .keys({
        name: Joi.string()
            .required(),
        price: Joi.number()
            .required()
            .min(1),
        phone: Joi.number()
            .required()
            .min(11),
        city: Joi.string()
            .required(),
        images: Joi.array()
            .required()
    });