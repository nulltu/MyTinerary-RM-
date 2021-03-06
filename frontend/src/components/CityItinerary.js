
import React from 'react'
import { Link } from 'react-router-dom'
import notAvailable from '../images/Not Available.svg'
import CardItinerary from './CardItinerary'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Footer from './Footer'


class CityItinerary extends React.Component {

  
    async componentDidMount() {
        const idSearch = (this.props.match.params.id)
        this.props.allItineraries()
        this.props.getInfo()
        this.setState({
            params:idSearch
        })
    }

    render() {

    

        if (this.props.itineraries === null) {
            return (

        
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )
        }

        const idSearch = (this.props.match.params.id)
        const filterCityId = this.props.cities.filter(city => city._id === idSearch)
        const filterItinerary = this.props.itineraries.filter(itinerary => itinerary.cityId === idSearch)
        // console.log(filterItinerary)
        

        return (
            <>

                {filterItinerary.length === 0
                    ? (
                        <div>
                            {filterCityId.map(city => {
                                return (<>
                                    <div style={{ backgroundImage: `url(${city.photo})`, height: '50vh', backgroundPosition: 'center', backgroundRepeat:'no-repeat', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column'  }}>
                                        <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px #334780' }}>{city.name}, {city.country}</h1>
                                    </div>
                                </>)
                            })}
                            <div style={{ textAlign: 'center' }}><img className="img__notAvailable" src={notAvailable} alt="" /></div>
                        </div>)
                    :
                    filterCityId.map(city => {
                        return (
                            <div className="country__itinerary" style={{ backgroundImage: `url(${city.photo})`}}>
                                <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                            </div>
                        )
                    })
                }

                {filterItinerary.map(item => {
                    return <CardItinerary itinerary={item} />
                            
                })}
                <div className="center" style={{ marginTop: '3em' }}>
                    <Link to="/cities"><i class="large material-icons itinerary">arrow_back</i></Link>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities.listCities,
        itineraries: state.itineraries.listItineraries
    }
}

const mapDispatchToProps = {
    getInfo: citiesActions.getInfo,
    allItineraries: itinerariesActions.allItineraries
}

export default connect(mapStateToProps, mapDispatchToProps)(CityItinerary)