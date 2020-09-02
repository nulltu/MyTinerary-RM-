const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    urlPhoto: { type: String, required: true },
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    countryOrigin:{type:String, required:true},
    password: { type: String, required: true }
})

const User = mongoose.model('user', userSchema)
module.exports = User

