import axios from 'axios'
import swal from 'sweetalert'



const userActions = {
    createAccount : newUser => {
        return async(dispatch, getState) => {

            const response = await axios.post('http://localhost:5000/api/signUp', newUser)
            if(!response.data.success){
               
            } else{

                console.log(response.data)
                swal({
                    title:'Thanks for signing up to Mytinerary'})
                dispatch({
                    type:'LOG_IN_APP',
                    payload: {
                        urlPhoto: response.data.urlPhoto,
                        username: response.data.username,
                        token: response.data.token
                    }
                })
            }
            return response
        }
    },

    logUserIn : dataLogin => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:5000/api/login', dataLogin)
            if(!response.data.success){
            }else{
                swal({
                    title: "Welcome a Mytinerary"
                })
                dispatch(
                    {
                    type: 'LOG_IN_APP',
                    payload : {
                        urlPhoto: response.data.urlPhoto,
                        username: response.data.username,
                        token: response.data.token,
                    }
                })
            }
            return response
        }
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOG_OUT_APP'
            })
        }
    }
}

export default userActions