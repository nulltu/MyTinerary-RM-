const initialState = {
    photoProfile:'',
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
        case 'NEW_ACCOUNT':
            return{
                ...state,
                photoProfile : action.payload.urlPhoto
            }
        case 'LOG_USER':
            return{
                ...state,
                photoProfile: action.payload.photoProfile
            }
            default:
                return state    
    }
}

export default userReducer