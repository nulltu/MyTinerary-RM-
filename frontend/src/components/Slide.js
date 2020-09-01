import React from "react";
import '../styles/slider.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-materialize";


class Slide extends React.Component {

  state = {
    cities: [['Cuzco', 'Los Ángeles', 'Tokio', 'Roma'], ['Paris', 'London', 'Madrid', 'Shangai'], ['Sidney', 'Venecia', 'Hawai', 'New York']]
  }



  render() {
    return (
      <>
      <p className="text-message-two">Popular Mytineraries</p> 
      <AliceCarousel autoPlay autoPlayInterval={4000}>
        {this.state.cities.map(group => {
          return (
            <div key={Carousel} className="carousel-item center row card">
            {group.map(city => {
              const foto = require(`../images/destino/${city}.jpg`)
              return (
                <div key={city} style={{
                  backgroundImage: `url(${foto})`, height: '35vh', backgroundSize: '0em',
                  backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }} className="card-image col xl3 l3 m6 s12">
                  <img src={foto} key={foto} alt="fotos"/>
                  <p className="title-city">{city}</p>
                </div>
              )
            })}
            </div>
          )
        })}
      </AliceCarousel>
      </>
    )
  }
}

export default Slide;