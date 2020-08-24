const express = require ('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itinieraryController =require('../controllers/itineraryController')

router.route('/cities')
.get(cityController.listCities)
.post(cityController.addCity)

router.route('/itineraries')
.get(itinieraryController.listItineraries)
.post(itinieraryController.addItinerary)

module.exports = router



