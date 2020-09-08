import React from 'react';
import { connect } from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import '../styles/activities.css'
import { TextInput } from 'react-materialize'


const Activities = (props) => {


    props.allActivities()
    // useEffect(() => {

    //     props.allActivities()

    // }, [])

    const filterActivity = props.activities.filter(activity => activity.itineraryId === props.itinerary._id)
    console.log(filterActivity)

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
            <div className="comment__activity">
                <label htmlFor="comment">Write comment: </label>
                <TextInput name="comment">
                </TextInput>

            </div>
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
