import React from 'react'
import like from '../images/like.svg'
import watch from '../images/watch.svg'
import money from '../images/money.svg'
import { Link } from 'react-router-dom'
import '../styles/card.css'


class CardItinerary extends React.Component {

    state = {
        viewMore: false
    }

    changeState = () => {
            this.setState({
            viewMore : !this.state.viewMore
        })
    }
    render() {
        return (
            <>
                <div id="card-itinerary" className="card__travellers">
                    <div className="itinerary__post">
                        <div className="itinerary__post__img">
                            <img className="img__card" src={this.props.itinerary.profilePhoto} alt="imgCard"></img>
                        </div>
                        <div className="itinerary__post__info">
                            <div className="itinerary__post__content">
                                <div className="like__container"><img className="money__img" src={money}></img><span>{this.props.itinerary.price}/5</span></div>
                                <div className="like__container"><img className="watch__img" src={watch}></img><span>{this.props.itinerary.duration}hrs.</span></div>
                                <div className="like__container"><img className="like__img" src={like}></img><span>{this.props.itinerary.rating}</span></div>
                                <span>{this.props.itinerary.hashtag}</span>
                            </div>
                            <h1 className="itinerary__post__title">{this.props.itinerary.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="center container__viewmore">
               
                            {this.state.viewMore
                                ? (<div>
                                    <h1>Soy la descripción o lo que haya que mostrar</h1>
                                </div>)
                                : null
                            }
                             <Link href="" className="itinerary__post__cta" onClick={this.changeState} >{this.state.viewMore ? 'view less':'view more'}</Link>
                </div>
                
            </>
        )
    }
}

export default CardItinerary