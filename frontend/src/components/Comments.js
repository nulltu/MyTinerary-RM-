import React from 'react'
import activitiesActions from '../redux/actions/activitiesActions'
import {connect} from 'react-redux'
import {TextInput, Button, Icon} from 'react-materialize'
import { useState } from 'react'
import axios from 'axios'


const Comments = (props) => {

    

    const [comment, setComment] = useState([])

    //capturo la data del imput y lo guardo en el state
    const readInput = e =>{
        setComment(e.target.value)
    }


    console.log(comment)

    const idItinerary = props.itinerary._id
   

    const sendComment = async e => {
        e.preventDefault()
        
        await axios.put('http://127.0.0.1:5000/api/itineraries', {id:idItinerary,comments: comment})
    }

    return(
        <>
{props.token !== ""
                ?
                <div className="comment__activity">
                    <TextInput onChange={readInput} type="text" id="TextInput-4" label="Comment your experience..."/>
                    <Button className="boton__send__comment" node="button" onClick={sendComment}> <Icon>play_arrow</Icon></Button>
                </div>
                : <div className="comment__notRegistered"><p>Only registered users can comment.</p></div>
            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        activities: state.activities.listActivities,
        token: state.user.token,
        itineraries: state.itineraries.listItineraries
    }
}

const mapDispatchToProps = {

    allActivities: activitiesActions.allActivities
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)