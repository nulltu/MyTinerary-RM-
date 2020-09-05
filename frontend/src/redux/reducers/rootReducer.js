import citiesReducer from './citiesReducer'
import activitiesReducer from './activitiesReducer'
import itinerariesReducer from './itinerariesReducer'
import userReducer from '../reducers/userReducer'
const {combineReducers} = require('redux')

const rootReducer = combineReducers({
    cities: citiesReducer,
    activities : activitiesReducer,
    itineraries : itinerariesReducer,
    user : userReducer
})

export default rootReducer
