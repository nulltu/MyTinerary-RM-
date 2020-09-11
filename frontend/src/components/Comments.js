import React from 'react'
import activitiesActions from '../redux/actions/activitiesActions'
import { connect } from 'react-redux'
import { TextInput, Button, Icon } from 'react-materialize'
import { useState } from 'react'
import axios from 'axios'
import itinerariesActions from '../redux/actions/itinerariesActions'
import '../styles/comment.css'
import swal from 'sweetalert'



const Comments = (props) => {

    const [comment, setComment] = useState({ user: '', comment: '', photo: '' })

    const readInput = e => {
        const dataComment = e.target.value
        const username = props.username
        const urlPhoto = props.photoProfile
        setComment({
            ...comment,
            user: username,
            comment: dataComment,
            photo: urlPhoto,
        })
    }

      console.log(props)

    const sendComment = async e => {
        e.preventDefault()
        const idItinerary = props.itinerary._id
        const dataCommmet = comment
        props.upCommment(idItinerary, dataCommmet)
        swal("Thanks for sharing your experience!");
    }
   

    return (
        <>
        
        
            {props.token !== ""
                ?
                <div className="comment__activity">
                    <div>
                        {props.itineraries
                            ? <div>{props.itinerary.comments.map(comment => {
                                return (
                                    <div className="container__comment__users">
                                        <div>
                                        <img className="img__profile__comment"  style ={{display:'flex', textAlign:'center'}}src={comment.photo} /><p style={{marginTop:'-2em',paddingTop:'1em', fontSize:'2em', fontWeight:'bold'}}>{comment.user} <span style={{fontSize: '0.6em'}}>Says: </span></p>
                                        </div>
                                        <label htmlFor="">{comment.comment}</label>
                                    </div>)
                            })}
                            </div>
                            : <div>Hola</div>}
                    </div>
                    <div>
                        <TextInput onChange={readInput} type="text" id="btnComment" label="Comment your experience..." />
                        <Button className="boton__send__comment" id="button__send" node="button" onClick={sendComment}> <Icon>play_arrow</Icon></Button>
                    </div>

                </div>
                : 
                
                <div className="comment__notRegistered"><p>Only registered users can comment.</p></div>
            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        activities: state.activities.listActivities,
        token: state.user.token,
        itineraries: state.itineraries.listItineraries,
        username: state.user.username,
        photoProfile: state.user.photoProfile,
    }
}

const mapDispatchToProps = {
    upCommment: itinerariesActions.upComment,
    allActivities: activitiesActions.allActivities
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments)