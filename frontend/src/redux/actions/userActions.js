import axios from 'axios'


const userActions = {
    createAccount : newUser => {
        return async(dispatch, getState) => {

            const response = await axios.post('http://localhost:5000/api/signUp', newUser)
            if(!response.data.success){
                console.log(response.data)
                const error =response.data.error
                alert(error)
            } else{
                
                alert('usuario creado correctamente')
                dispatch({
                    type:'NEW_ACCOUNT',
                    payload: response.data.user
                })
            }
        }
    },

    logUserIn : dataLogin => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:5000/api/login', dataLogin)
            if(!response.data.success){
                alert(response.data)
                console.log(response.data)
            }else{
                console.log(response.data.user)
                dispatch(
                    {
                    type: 'LOG_USER',
                    payload : response.data.username
                })
            }
        }
    },

    logOut: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOG_OUT'
            })
        }
    }
}

export default userActions