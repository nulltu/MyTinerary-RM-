const initialState = {
    photoProfile:'',
    username: '',
    token:''
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
       
        case 'LOG_IN_APP':
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                photoProfile: action.payload.urlPhoto,
                username: action.payload.username,
                token: action.payload.token
                
            }
        case 'LOG_OUT_APP':
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }
            default: 
                return state    
    }
}

export default userReducer