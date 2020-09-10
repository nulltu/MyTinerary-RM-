const Itinerary = require('../models/Itinerary')

const itineraryController={
    listItineraries: async(req, res)=>{
        const list = await Itinerary.find()
        res.json({
            success:true,
            Itinerary: list
        })
    },

    addItinerary:(req, res)=>{
        const {hashtag, title, profilePhoto, rating, duration, price, comments, cityId} =req.body
        const newItinerary = new Itinerary({
            hashtag:hashtag,
            title:title,
            profilePhoto:profilePhoto,
            rating:rating,
            duration:duration,
            price:price,
            comments:comments,
            cityId:cityId
        })

        newItinerary.save() 
        .then(user=>{
            res.json({success: true, user:user})
        })
        .catch(error=>{
            res.json({success:false, error: error})
        })
    },

    bringCityItinerary:async(req, res)=>{
        const itineratySearch = await Itinerary.find({cityId: req.params.id})
        res.json({
            Itinerary : itineratySearch
        })
    },

    upComment: async(req, res) =>{
       const upComment = req.body.comments 
        const commentItinerary = await Itinerary.findByIdAndUpdate({_id:req.body.idItinerary}, {$push:{comments: upComment}})
        console.log(commentItinerary)
        const itineraries = await Itinerary.find({cityId: commentItinerary.cityId})

        res.json({
            success: true,
            itineraries
        })
    }

}

module.exports=itineraryController