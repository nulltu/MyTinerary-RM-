const express = require ('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itinieraryController =require('../controllers/itineraryController')
const activityController = require('../controllers/activityController')
const userController = require('../controllers/userController')
const validatorSignUp = require('../config/validatorSignUp')
const itineraryController = require('../controllers/itineraryController')




router.route('/cities')
.get(cityController.listCities)
.post(cityController.addCity)

router.route('/itineraries')
.get(itinieraryController.listItineraries)
.post(itinieraryController.addItinerary)

// router.route('cityItinerary/:id/comment')
// .put(itinieraryController.addComment)
// .delete(itineraryController.deleteComment)

router.route('/cityItinerary/:id')
.get(itinieraryController.bringCityItinerary)

router.route('/cities/:id')
.get(cityController.viewCity)


router.route('/activities')
.get(activityController.ListActivities)
.post(activityController.addActivity)

router.route('/activities/:id')
.get(activityController.bringActivity)

router.route('/signUp')
.get(userController.listUsers)
.post(validatorSignUp.validateData,userController.addUser)

router.route('/login')
.post(userController.loginUser)

module.exports = router



