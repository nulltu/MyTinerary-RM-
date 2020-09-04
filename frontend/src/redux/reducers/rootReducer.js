import citiesReducer from './citiesReducer'
import activitiesReducer from './activitiesReducer'
import itinerariesReducer from './itinerariesReducer'
const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    cities: citiesReducer,
    activities : activitiesReducer,
    itineraries : itinerariesReducer
})

export default rootReducer
