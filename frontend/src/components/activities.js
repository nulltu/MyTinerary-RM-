import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Activities = () =>{

    const [activity, setActivity] = useState([])  

    useEffect(() => {
        getData()
    }, [])

    const getData = async ()=>{

        const data = await fetch('http://127.0.0.1:5000/api/activities')
        const infoActivity = await data.json()
        const dataActivity = infoActivity.Activity
        setActivity(dataActivity)    
    }

    let {id} = useParams()

    return(
        <> 
            <h1>Hola, soy las activities</h1>

            {activity.map(item=>{
                return(
                    <>
                    <div style={{backgroundColor:'black'}}>
                    <p>{item.activity}</p>
                    <img src={item.photo} alt=""/>
                    </div>
                <h3>{id}</h3>
                    
                    </>
                )
            })}
    
        </>
    )
}

export default Activities
