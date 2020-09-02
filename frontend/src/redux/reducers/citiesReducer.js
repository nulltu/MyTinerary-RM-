const initialState =  {
    listCities: []
}

const  citiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GETINFO':
            return{
                ...state,
                listCities: action.payload
            }
        default:
            return state    
    }
}

export default citiesReducer