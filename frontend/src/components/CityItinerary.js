
import React from 'react'
import TheFooter from '../components/TheFooter'
import { Link } from 'react-router-dom'
import notAvailable from '../images/Not Available.svg'
import CardItinerary from './CardItinerary'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


class CityItinerary extends React.Component {

    state = {
        itineraries: null,
    }

    async componentDidMount() {
        const idSearch = (this.props.match.params.id)

        const responseApi = await fetch(`http://127.0.0.1:5000/api/cityItinerary/${idSearch}`)
        const infoApi = await responseApi.json()
        const dataItineraries = infoApi.Itinerary

        this.props.getInfo()
        this.setState({
            itineraries: dataItineraries
        })
    }

    render() {


        if (this.state.itineraries === null) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }
       
        const idSearch = (this.props.match.params.id)
        const filterCityId = this.props.cities.filter(city => city._id === idSearch) 
      
        return (
            <>

                <h2 style={{ textAlign: 'center', fontSize: '4em', backgroundColor: '#EAB14D', margin: '0px', padding: '0.5em', color: 'whitesmoke', fontWeight: 'bold' }}>Itineraries</h2>
                {this.state.itineraries.length === 0
                    ? (
                        <div>
                            {filterCityId.map(city => {
                                return (<>
                                    <div style={{ backgroundImage: `url(${city.photo})`, height: '50vh', backgroundPosition: 'center', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                        <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                                    </div>
                                </>)
                            })}
                            <div style={{ textAlign: 'center' }}><img style={{ width: '30vw' }} src={notAvailable} alt="" /></div>
                        </div>)


                    :
                    filterCityId.map(city => {
                        return (
                            <div style={{ backgroundImage: `url(${city.photo})`, height: '50vh', backgroundPosition: 'center', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                            </div>
                        )
                    })
                }

                {this.state.itineraries.map(itinerary => {
                    return <CardItinerary itinerary={itinerary} />
                })}
                <div className="center" style={{ marginTop: '3em' }}>
                    <Link to="/cities"><i class="large material-icons itinerary">arrow_back</i></Link>
                </div>
                <TheFooter />s
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        cities:state.cities.listCities,
    }
}

const mapDispatchToProps = {
    getInfo: citiesActions.getInfo
}

export default connect(mapStateToProps, mapDispatchToProps) (CityItinerary)