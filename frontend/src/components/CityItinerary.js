import React from 'react'
import TheFooter from '../components/TheFooter'
import { Link } from 'react-router-dom'
import { Row } from 'react-materialize'
import notAvailable from '../images/Not Available.svg'
import like from '../images/like.svg'
import watch from '../images/watch.svg'
import money from '../images/money.svg'
import '../styles/card.css'



class CityItinerary extends React.Component {


    state = {
        itineraries: [],
        cities: []
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
            cities: dataCity
        })
    }

    render() {
        // console.log(this.state.itineraries)
        console.log(this.state.cities)


        if (this.state.itineraries.length > 0) {
            return (

                <>
                    {this.state.cities.map(city => {

                        return (
                            <>
                                <h2 style={{ textAlign: 'center', fontSize: '5em', backgroundColor: '#EAB14D', margin: '0px', padding: '0.5em', color: 'whitesmoke', fontWeight: 'bold' }}>Itineraries</h2>
                                <div style={{ backgroundImage: `url(${city.photo})`, height: '70vh', backgroundPosition: 'center', margin: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <h1 style={{ color: 'whitesmoke', textAlign: 'center', backgroundColor: 'rgba(245, 245, 245,0.5)', fontWeight: '1000', WebkitTextStroke: '1.5px black' }}>{city.name}, {city.country}</h1>
                                </div>
                            </>
                        )
                    })}
                    {this.state.itineraries.map(itinerary => {
                        return (
                            <>
                                <div className="card__travellers">
                                    <div className="itinerary__post">
                                        <div className="itinerary__post__img">
                                            <img className="img__card" src={itinerary.profilePhoto} alt="imgCard"></img>
                                        </div>
                                        <div className="itinerary__post__info">
                                            <div className="itinerary__post__content">
                                                <div className="like__container"><img className="money__img" src={money}></img><span>{itinerary.price}/5</span></div>
                                                <div className="like__container"><img className="watch__img" src={watch}></img><span>{itinerary.duration}hrs.</span></div>
                                                <div className="like__container"><img className="like__img" src={like}></img><span>{itinerary.rating}</span></div>
                                                <span>{itinerary.hashtag}</span>
                                            </div>
                                            <h1 className="itinerary__post__title">Travel Food</h1>
                                            <p className="itinerary__post__comments">
                                                "{itinerary.comments}"
                                              </p>

                                            <Link href="|" className="itinerary__post__cta">View More</Link>
                                        </div>
                                    </div>

                                </div>

                            </>
                        )
                    })}

                    <div className="center">
                        <Link to="/cities"><i class="large material-icons itinerary">arrow_back</i></Link>
                    </div>
                    <TheFooter />
                </>
            )

        } else {

            return (
                <>

                    <div style={{ textAlign: 'center' }}><img style={{ width: '100em' }} src={notAvailable} /></div>
                    <div className="center">
                        <Link to="/cities"><i class="large material-icons itinerary">arrow_back</i></Link>
                    </div>
                    <TheFooter />


                </>
            )
        }


    }
}

export default CityItinerary