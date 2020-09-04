const initialState =  {
    listActivities: [],
}


const activitiesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ALL_ACTIVITIES':
            return{
                ...state,
                listActivities : action.payload
            }
            default: 
            return state
    }
}

export default activitiesReducer