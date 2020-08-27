import React from 'react'
import TheFooter from '../components/TheFooter'
import { Link } from 'react-router-dom'
import { Row } from 'react-materialize'
import notAvailable from '../images/Not Available.svg'
import like from '../images/like.svg'



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


        return (

            <>
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
                                            <span>{itinerary.hashtag}</span>
                                            <span>{itinerary.price}</span>
                                            <span>{itinerary.duration}</span>
                    <div className="like__container"><img className="like__img" src={like}></img><span>{itinerary.rating}</span></div>
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
            </>
        )
    }
}

export default CityItinerary