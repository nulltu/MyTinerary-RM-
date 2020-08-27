import React from 'react'
import imagen from '../images/hero.jpg'
import '../styles/card.css'
import {Link} from 'react-router-dom'

class CardItinerary extends React.Component {
    render() {

        return (
            <>
            <div className="card__travellers">
            <div className="itinerary__post">
                    <div className="itinerary__post__img">
                        <img className="img__card" src={imagen} alt="imgCard"></img>
                    </div>
                    <div className="itinerary__post__info">
                        <div className="itinerary__post__content">
                            <span>#travel #Hungry</span>
                            <span>price</span>
                            <span>duration</span>
                            <span>rating</span>
                        </div>
                        <h1 className="itinerary__post__title">Travel Food</h1>
                        <p className="itinerary__post__comments">
                            
                        I really liked walking through its streets, I hope to return.
                        </p>
                        <Link href="|" className="itinerary__post__cta">View More</Link>
                    </div>
                </div>

            </div>
                
            </>
        )
    }
}

export default CardItinerary
