import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import '../styles/activities.css'




const Activities = (props) => {


    useEffect(() => {
        props.allActivities()

    }, [])

    const filterActivity = props.activities.filter(activity => activity.itineraryId === props.itinerary._id)
    console.log(filterActivity)

    return (
        <>
        {filterActivity.length === 0
        ? (<div><p>No hay nada</p></div>)
        :
            <div className="container__activity">
        {filterActivity.map(activity => {
                return (
                    <> 
                        <div className="img__activiy" style={{backgroundImage:`url(${activity.photo})`}}><p>{activity.activity}</p></div>
                    </>
                )
            })}
        </div>
        }
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        activities: state.activities.listActivities
    }
}

const mapDispatchToProps = {
    allActivities: activitiesActions.allActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
