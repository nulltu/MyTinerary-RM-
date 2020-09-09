import React from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import { useEffect } from 'react'


const Logout = (props) => {

    useEffect(() => {
        props.logoutUser()
        console.log(props)
        props.history.push('/')
    },[])

    return(null)
}

const maspDispatchToProps = {
    logoutUser : userActions.logoutUser
}

export default connect(null, maspDispatchToProps)(Logout)