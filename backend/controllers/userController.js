const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    listUsers : async(req, res)=>{
        const list = await User.find()
        res.json({
            success:true,
            User : list
        })
    },

    addUser: async(req, res)=>{
        const {urlPhoto, username, firstName, lastName, email, countryOrigin, password} = req.body
        const  passHash = bcryptjs.hashSync(password, 10)
        const userExists = await User.findOne({username})
   
        if(userExists){
            res.json({
                success: false, error: "Username in use, Choose another username."
            })
        } else{
             const newUser = new User({
                 urlPhoto, username, firstName, lastName, email, countryOrigin, password: passHash
             })
             var user = await newUser.save()
             res.json({success:true, user})
        }
    },

        loginUser : async(req, res) => {
            const {username, password} = req.body
    
            const userExists = await User.findOne({username})
            console.log(username)
            console.log(password)
            if(!userExists){
                console.log(username)
                res.json({
                    success: false, message: 'The username or password you entered is incorrect'
                })
            }else{
                const passwordlogin = bcryptjs.compareSync(password, userExists.password)
                if(!passwordlogin){
                    res.json({
                        success : false, message: 'The username or password you entered is incorrect'})
                }else{
                    // jwt.sign(userExist)
                    res.json({
                        success: true,
/*con este mismo nombre tengo que llamar en la action*/   username: userExists
                    })
                }
            }
        }
    
}

module.exports = userController