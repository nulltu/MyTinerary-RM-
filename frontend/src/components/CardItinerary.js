import React from 'react'
import like from '../images/like.svg'
import watch from '../images/watch.svg'
import money from '../images/money.svg'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import Activities from './activities'


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

        function priceItinerary(price){
            switch(price){
                case 1: return(<div className="like__container"><p className="price__text">Price:</p><img className="money__img" src={money} alt=""/></div> )
                case 2: return(<div className="like__container"><p className="price__text">Price:</p><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/></div>)
                case 3: return(<div className="like__container"><p className="price__text">Price:</p><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money}alt="" /></div>)
                case 4: return(<div className="like__container"><p className="price__text">Price:</p><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/></div>)
                case 5: return(<div className="like__container"><p className="price__text">Price:</p><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/><img className="money__img" src={money} alt=""/></div>)
                default: return('Not value')
            }   
        }

        return (
            <>
                <div id="card-itinerary" className="card__travellers">
                    <div className="itinerary__post">
                        <div className="itinerary__post__img">
                            <img className="img__card" src={this.props.itinerary.profilePhoto} alt="imgCard"></img>
                        </div>
                        <div className="itinerary__post__info"> 
                            <div className="itinerary__post__content">
                                <span>{priceItinerary(this.props.itinerary.price)}</span>
                                <div className="like__container"><img className="watch__img" src={watch} alt=""/><span>{this.props.itinerary.duration}hrs.</span></div>
                                <div className="like__container"><img className="like__img" src={like}alt=""/><span>{this.props.itinerary.rating}</span></div>
                                <span>{this.props.itinerary.hashtag}</span>
                            </div>
                            <h1 className="itinerary__post__title">{this.props.itinerary.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="center container__viewmore">
               
                            {this.state.viewMore
                                ? (<div>
                                    <Activities></Activities>
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