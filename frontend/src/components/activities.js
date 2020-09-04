import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'


const Activities = (props) =>{


    useEffect(() => {
        props.allActivities()

    }, [])

   
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
        activities: state.activities.listActivities
    }
}

const mapDispatchToProps = {
    allActivities: activitiesActions.allActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
