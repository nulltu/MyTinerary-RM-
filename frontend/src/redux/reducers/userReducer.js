const initialState = {
    firstName:'',
    lastName: ''
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
        case 'NEW_ACCOUNT':
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName : action.payload.firstName
            }

            default:
                return state
            
    }
}

export default userReducer