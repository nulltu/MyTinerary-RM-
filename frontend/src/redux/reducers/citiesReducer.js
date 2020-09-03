const initialState =  {
    listCities: [],
    filteredCities: []
}

const  citiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GETINFO':
            return{
                ...state,
                listCities: action.payload,
                filteredCities: action.payload
            }
        case 'CITIES_FILTERED':

            const filterFunction = state.listCities.filter(city =>city.name.trim().toLowerCase().indexOf(action.payload.trim().toLowerCase())===0)

            return{
                ...state,
                filteredCities: filterFunction
            }
            default:
            return state    
    }
}

export default citiesReducer