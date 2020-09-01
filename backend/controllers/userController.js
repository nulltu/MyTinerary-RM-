const User = require('../models/User')

const userController = {
    listUsers : async(req, res)=>{
        const list = await User.find()
        res.json({
            success:true,
            User : list
        })
    },

    addUser:(req, res)=>{
        const {urlPhoto, username, firstName, lastName, email, password} = req.body

        const newUser = new User({
            urlPhoto : urlPhoto,
            username:username,
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })

        newUser.save() 
        .then(user=>{
            res.json({success: true, user:user})
        })
        .catch(error=>{
            res.json({success:false, error: error})
        })
    }
}

module.exports = userController