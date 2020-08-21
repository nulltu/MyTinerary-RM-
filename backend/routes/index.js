const express = require ('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.route('/cities')
.get(cityController.listCities)
.post((cityController.addCity))




module.exports = router



