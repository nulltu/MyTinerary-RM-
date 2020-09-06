import React, {useEffect } from 'react';
import {connect} from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Activities = (props) =>{


    useEffect(() => {
        props.allActivities()
        props.allItineraries()

    }, [])

    

//    console.log(props.itineraries)
    return(
        <> 
            <h1>Hola, soy las activities</h1>

            {props.activities.map(item=>{
                return(
                    <>
                    <div style={{backgroundColor:'black'}}>
                    <p>{item.activity}</p>
                    <img src={item.photo} alt=""/>
                    </div>
                
                    </>
                )
            })}
    
        </>
    )
}


const mapStateToProps = state =>{
    return{
        activities: state.activities.listActivities,
        itineraries: state.itineraries.listItineraries
    }
}

const mapDispatchToProps = {
    allActivities: activitiesActions.allActivities,
    allItineraries: itinerariesActions.allItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
