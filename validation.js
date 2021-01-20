
const Joi = require('@hapi/joi');


//Walidacja rejestracji

 const registerValidation = (data) => {
        const schema = { 
            imię: Joi.string().min(6),
            email: Joi.string().min(6).required().email(),
            hasło: Joi.string().min(6).required() 
            };
            return Joi.validate(data, schema);
     };
    


//Walidacja logowania
const loginValidation = (data) => {
    const schema = { 
        email: Joi.string().min(6).required().email(),
        hasło: Joi.string().min(6).required() 
        };
        return Joi.validate(data, schema);
 };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;