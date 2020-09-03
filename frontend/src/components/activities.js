import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Activities = () =>{

    // const [activity setActivity] = useState([])  

    useEffect(() => {
        getData()
    }, [])

    const getData = async ()=>{

        const data = await fetch('http://127.0.0.1:5000/api/activities')
        const response = await data.json()
        console.log(response)
    }

    return(
        <>

            <h1>Hola, soy las activities</h1>


        </>
    )
}

export default Activities
