import axios from 'axios'

const userActions = {
    createAccount : newUser => {
        return async(dispatch, getState) => {

            const response = await axios.post('http://localhost:5000/api/signUp', newUser)
            if(!response.data.success){
                console.log(response.data);
                alert('algo salio mal')
            } else{
                dispatch({
                    type:'NEW_ACCOUNT',
                    payload: response.data.user
                })
            }
        }
    }
}

export default userActions