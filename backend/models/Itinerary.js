const mongoose = require('mongoose')

const itinerarySchema= new mongoose.Schema({
    hashtag:{type:Array, required:true},
    title:{type:String, required:true},
    profilePhoto:{type: String, require: true},
    rating:{type: Number, required: true},
    duration:{type:Number, required: true},
    price:{type:Number, required:true},
    cityId:{type:mongoose.Schema.ObjectId, ref:'city'}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary