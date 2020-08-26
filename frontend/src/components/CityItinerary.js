import React from 'react'
import TheFooter from '../components/TheFooter'
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import notAvailable from '../images/Not Available.svg'


class CityItinerary extends React.Component {


    state = {
        itinerary: []
    }

    async componentDidMount() {
        const idSearch = (this.props.match.params.id)
        const responseApi = await fetch(`http://127.0.0.1:5000/api/cityItinerary/${idSearch}`)
        const infoApi = await responseApi.json()
        const dataItinerary = infoApi.Itinerary
        console.log(dataItinerary)

        this.setState({
            itinerary: dataItinerary
        })

    }



    render() {

        // console.log(this.state.itinerary)

        if (this.state.itinerary.length > 0) {
            return (
                <>

                    <h1 style={{ textAlign: 'center' }}>Itinerary</h1>

                    <Row className="container center">
                        {this.state.itinerary.map(itinerary => {
                            return (

                                <div className="card horizontal col m6">
                                    <div className="card-image">
                                        <img src={itinerary.profilePhoto}></img>
                                    </div>
                                    <div className="card-content">
                                        <h3>{itinerary.title}</h3>
                                        <p>{itinerary.hashtag}</p>
                                        <p>Rating: {itinerary.rating}</p>
                                        <p>precio: {itinerary.price}</p>
                                        <p>{itinerary.comments}</p>
                                    </div>

                                </div>

                            )
                        })}

                    </Row>
                    <div className="center">
                        <Link to="/cities"><i class="large material-icons">arrow_back</i></Link>
                        {/* <Link to="/"><i class="large material-icons">home</i></Link>
                    <Link><i class="large material-icons">arrow_forward</i>s</Link> */}
                    </div>
                    <TheFooter />

                </>

            )
        }

        else {
            return (
                <>
                <div className="center">
                    <img style={{ width: '40vw' }} src={notAvailable}></img>
                </div>
                <div className="center">
                <Link to="/cities"><i class="large material-icons">arrow_back</i></Link>
                {/* <Link to="/"><i class="large material-icons">home</i></Link>
            <Link><i class="large material-icons">arrow_forward</i>s</Link> */}
            </div>
            <TheFooter />
                
            </>
            )

        }

    }
}

export default CityItinerary