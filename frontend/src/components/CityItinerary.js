import React from  'react'





class CityItinerary extends React.Component{

    state = {
        itinerary:[]
    }

   async componentDidMount(){
        const idSearch = (this.props.match.params.id)
        const responseApi  = await fetch(`http://127.0.0.1:5000/api/cityItinerary/${idSearch}`)
        const infoApi = await responseApi.json()
        const dataItinerary = infoApi.Itinerary 
        // console.log(dataItinerary)
        
        this.setState({
            itinerary:dataItinerary
        })
        
            
    }
    render(){
        console.log(this.state.itinerary)
        return(
            <>
            <div style={{textAlign:'center'}} className="row">
            <h2>Itinerario</h2>
               <div className="col m6">
               <h3>{this.state.itinerary.title}</h3>
                <p>precio: {this.state.itinerary.price}</p>
                <p>{this.state.itinerary.hashtag}</p>
                <p>Rating: {this.state.itinerary.rating}</p>
                </div> 
            
           
            <div className="col m6">
            <img style={{width:'30vh'}} src={this.state.itinerary.profilePhoto}></img>
            </div>
            </div>
          
            </>

        )
    }
}

export default CityItinerary