import React from 'react'
import activitiesActions from '../redux/actions/activitiesActions'
import {connect} from 'react-redux'
import {TextInput, Button, Icon} from 'react-materialize'
import { useState } from 'react'
import axios from 'axios'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Comments = (props) => {

    const [comment, setComment] = useState({user:'', comment:'', photo:''})
    // const [commetRegist, setCommentRegist] = useState(null)

    //capturo la data del imput y lo guardo en el state
    const readInput = e =>{
        const dataComment = e.target.value
        const username = props.username
        const urlPhoto = props.photoProfile
        setComment({
            ...comment,
            user: username,
            comment: dataComment  ,
            photo : urlPhoto
        })
    }
    
    const sendComment = async e => {
        e.preventDefault()
        const idItinerary = props.itinerary._id
        const dataCommmet = comment
        props.upCommment(idItinerary, dataCommmet)
    }

   
    return(
        <>
{props.token !== ""
                ?
                <div className="comment__activity">
                     <div>
    {props.itineraries ? <div>{props.itinerary.comments.map(comment => { return (<div><img className="img__profile__comment" src={comment.photo}/><label htmlFor="">{comment.comment}</label></div>)})} </div> : <div>Hola</div>}
                    </div>
                    <div>
                    <TextInput onChange={readInput} type="text" id="TextInput-4" label="Comment your experience..."/>
                    <Button className="boton__send__comment" node="button" onClick={sendComment}> <Icon>play_arrow</Icon></Button>
    <div>getHour()</div>
                    </div>
                   
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
        itineraries: state.itineraries.listItineraries,
        username : state.user.username,
        photoProfile : state.user.photoProfile,
    }
}

const mapDispatchToProps = {
    upCommment : itinerariesActions.upComment,
    allActivities: activitiesActions.allActivities
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)