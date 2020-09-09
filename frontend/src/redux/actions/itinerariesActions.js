import axios from "axios"

const itinerariesActions={

    allItineraries: () => {

        return async(dispatch, getState)=>{

                const data = await fetch('http://127.0.0.1:5000/api/itineraries')
                const infoItinerary = await data.json()
                const dataItinerary = infoItinerary.Itinerary

                dispatch({
                    type: "ALL_ITINERARIES",
                    payload: dataItinerary
                })
        }
    },

    // upComment : (idUser, comment, token ) =>{
    //     return (dispatch, getState) => {
    //         const response  =  axios.put(`http://127.0.0.1:5000/api/itineraries`, {idUser, comment, token} ) 
    //     }
    // }
}

export default itinerariesActions