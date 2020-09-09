import React from 'react';
import { connect } from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import '../styles/activities.css'
import { TextInput, Icon } from 'react-materialize'
import { useEffect } from 'react'
import {Button} from 'react-materialize'


const Activities = (props) => {



    useEffect(() => {

        props.allActivities()

    }, [])

    const filterActivity = props.activities.filter(activity => activity.itineraryId === props.itinerary._id)

    console.log(props)

    return (
        <>
            {filterActivity.length === 0
                ? (<div className="not__Available"></div>)
                :
                (<div className="container__activity">
                    {filterActivity.map(activity => {
                        return (
                            <>
                                <div className="img__activiy" style={{ backgroundImage: `url(${activity.photo})` }}><p>{activity.activity}</p></div>

                            </>
                        )
                    })}
                </div>
                )
            }

            {props.token !== ""
                ?
                <div className="comment__activity">
                    <TextInput
                        id="TextInput-4"
                        htmlFor=""
                        label="Comment your experience..."
                    />
             <Button className="boton__send__comment" node="button">
    <Icon>
    play_arrow
    </Icon>
  </Button>
                </div>
                : <div className="comment__notRegistered"><p>Only registered users can comment.</p></div>
            }

        </>
    )
}

const mapStateToProps = state => {
    return {
        activities: state.activities.listActivities,
        token: state.user.token
    }
}

const mapDispatchToProps = {
    allActivities: activitiesActions.allActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
