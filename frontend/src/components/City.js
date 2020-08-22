import React from 'react'

function City(props){
    return(
        <div className="col m1">
            <li>{props.city.name}</li>
            <img style={{width:'12vh'}} src={props.city.photo}></img>
        </div>
    )
}
export default City