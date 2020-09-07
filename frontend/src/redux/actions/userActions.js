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

    logUserIn : userLogin => {
        return async (dispatch, getState) => {

            const response = await axios.post('http://localhost:5000/api/login', userLogin)
            if(!response.data.success){
                console.log(userLogin)
                alert(response.data.error)
            }else{
                dispatch({
                    type: 'LOG_USER',
                    payload : response.data.user
                })
            }
        }
    }
}

export default userActions