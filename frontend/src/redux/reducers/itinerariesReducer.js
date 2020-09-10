const initialState =  {
    listItineraries: null,
}

const itinerariesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ALL_ITINERARIES':
            return{
                ...state,
                listItineraries : action.payload
            }
            case 'RENDER_COMMENT':
                console.log(action.payload)
                return{
                    ...state,
                    listItineraries: action.payload
                }
            default: 
            return state
    }
}

export default itinerariesReducer