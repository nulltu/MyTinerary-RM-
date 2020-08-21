import React from 'react'

function Digimon(props){
    return(
        <div className="col m1">
            <li>{props.digimon.name}</li>
            <img style={{width:'12vh'}} src={props.digimon.img}></img>
        </div>
    )
}
export default Digimon