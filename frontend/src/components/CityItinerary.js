
import React from 'react'
import TheFooter from '../components/TheFooter'
import { Link } from 'react-router-dom'
import notAvailable from '../images/Not Available.svg'
import CardItinerary from './CardItinerary'

class CityItinerary extends React.Component {

    state = {
        itineraries: null,
        city: [],

    }

    async componentDidMount() {
        const idSearch = (this.props.match.params.id)

        const responseApi = await fetch(`http://127.0.0.1:5000/api/cityItinerary/${idSearch}`)
        const infoApi = await responseApi.json()
        const dataItineraries = infoApi.Itinerary

        const responseApiCities = await fetch(`http://127.0.0.1:5000/api/cities/${idSearch}`)
        const infoCities = await responseApiCities.json()
        const dataCity = infoCities.City

        this.setState({
            itineraries: dataItineraries,
            city: dataCity
        })
    }

    render() {

        if(this.state.itineraries === null){
            return null
        }   
            return (
                <>
                
                <h2 style={{ textAlign: 'center', fontSize: '4em', backgroundColor: '#EAB14D', margin: '0px', padding: '0.5em', color: 'whitesmoke', fontWeight: 'bold' }}>Itineraries</h2>
                {this.state.itineraries.length === 0
                ? ( 
                    <div>
                        {this.state.city.map(city=>{
                            return(<>
                             <div style={{ backgroundImage: `url(${city.photo})`, height: '50vh', backgroundPosition: 'center', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                     </div>
                            </>)
                        })}
                        <div style={{ textAlign: 'center' }}><img style={{ width: '30vw' }} src={notAvailable} /></div>
                    </div>)
        
                    
                :   
                    this.state.city.map(city=>{
                    return (
                    <div style={{ backgroundImage: `url(${city.photo})`, height: '50vh', backgroundPosition: 'center', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                     </div>
                 )})
                 }

                {this.state.itineraries.map(itinerary => {
                return  <CardItinerary itinerary={itinerary}/>
                })}
                <div className="center" style={{marginTop:'3em'}}>
                        <Link to="/cities"><i class="large material-icons itinerary">arrow_back</i></Link>
                </div>
                <TheFooter />s
                </>
            )
    }
}

export default CityItinerary