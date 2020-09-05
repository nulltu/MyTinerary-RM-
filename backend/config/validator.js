const Joi = require('@hapi/joi')

const validator={
    validateData: (req, res, next) =>{
        const schema = Joi.object({
            urlPhoto: Joi.string(),
            username: Joi.string().required().trim().alphanum().min(5).max(30),
            firstName:Joi.string().required().trim().alphanum(),
            lastName: Joi.string().required().trim().alphanum(),
            email: Joi.string().email().required(),
            countryOrigin: Joi.string().required(),
            password: Joi.string().trim().pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!@#$%^&*()[\]]).{5,}/).required()
        })

        const validation = schema.validate(req.body)

        if(validation.error !== undefined){
            return res.json({
                success: false,
                error: "validation with errors, check the fields.",
                message: validation.error
            })
        }
        next()
    }
}

module.exports = validator