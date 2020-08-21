const cityController={

    listCities:(req, res)=>{

        const citiesTour=[
            {country:'Spain', city: 'Madrid', nieve: false},
            {country:'France', city: 'Paris', nieve: true}
        ]
        res.json({
            success:true,
            cities:citiesTour
        })
    },

    addCity:(req, res)=>{
        const {country, city, nieve} =req.body

    }

}


module.exports = cityController