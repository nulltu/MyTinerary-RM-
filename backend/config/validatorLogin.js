const Joi = require('@hapi/joi')
const { required } = require('@hapi/joi')
const validatorSignUp = require('./validatorSignUp')

const validatorLogin = {

    validateData: (req, res, next) =>{
        const schema = joi.object({
            username : join.string().trim().required(),
            password : joi.string().trim().required()
        })

        const validation = schema.validate(req.body) 

        if(validation.error !== undefined)
        return res.json({
            success : false,
            error : 'The username or password you entered is incorrect',
            message : validation.error
        })
    }
}