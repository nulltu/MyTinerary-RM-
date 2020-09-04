const itinerariesActions={

    allItineraries: () => {

        return async(dispatch, getState)=>{

                const data = await fetch('http://127.0.0.1:5000/api/activities')
                const infoItinerary = await data.json()
                const dataItinerary = infoItinerary.Itinerary

                dispatch({
                    type: "ALL_ACTIVITIES",
                    payload: dataItinerary
                })
        }

    }

}

export default itinerariesActions