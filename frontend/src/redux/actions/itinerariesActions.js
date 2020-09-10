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

    upComment : (idItinerary, dataComment, idCity) =>{
        return async (dispatch, getState) => {
               const response  = await axios.put('http://127.0.0.1:5000/api/itineraries', {idItinerary, comments:dataComment, idCity})  
               const itineraries = response.data.itineraries
               if(!response.data.success){
               }else{
                dispatch({
                    type: 'RENDER_COMMENT',
                    payload : itineraries
                })
               }

               
            }  
           
    },

     
}

export default itinerariesActions