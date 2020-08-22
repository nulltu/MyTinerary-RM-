const City=require('../models/City')

const cityController={

    listCities: async(req, res)=>{
        //Solicito la lista de cities.
       const list = await City.find()
        res.json({
            success:true,
            City: list

            //con .then 
            //.then(list=>{
            //     res.json({success:true, list:list})
            // })
            // .catch(error =>{
            //     res.json({success:false, error:error})
            // })
        })
    },

    addCity:(req, res)=>{
        const {name, country, photo} =req.body
       
        const newCity = new City({
            name: name,
            country:country,
            photo:photo
        })

        newCity.save() 
        .then(user=>{
            res.json({success: true, user:user})
        })
        .catch(error=>{
            res.json({success:false, error: error})
        })
    }
}


module.exports = cityController