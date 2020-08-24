import React from 'react'
import Header from '../components/Header'
import City from '../components/City'
import TheFooter from '../components/TheFooter'
import { Row } from 'react-materialize'


class Cities extends React.Component {

    state = {
        cities: [],
        filteredCities:[]
    }

    async componentDidMount() {
           const responseApi  = await fetch('http://127.0.0.1:5000/api/cities')
           const infoApi = await responseApi.json()
            const dataCity = infoApi.City
            // console.log(infoApi)
            this.setState({
                cities: dataCity,
                filteredCities: dataCity
            })
           }

           capturarValor= e =>{
               //tomo el value del input
            const valorBuscado = e.target.value
            //creo una constante y hago un filter del array cities
            const filterCities = this.state.cities.filter(city =>city.name.trim().toLowerCase().indexOf(valorBuscado.trim().toLowerCase())===0)
            this.setState({
                filteredCities: filterCities
            })
         }
            
        render() {
            // console.log(this.state.cities)

        return (
            <>
                <h1 style={{textAlign:'center', color:'#EAB14D', fontSize:'3em', fontWeight:'bold'}}>Cities</h1>
                <Row className="container">
                <div class="input-field center container" style={{width:'40vw'}}>
                     <input className="center imput-cities" type="text" data-length="10"  name="city" placeholder="What city are you looking for?" id="city" 
                    onChange={this.capturarValor}/>      
                </div>
                </Row>
                 <div className="row">
                            {this.state.filteredCities.map(city=>{
                                return <City city={city}/>
                            })}
                </div >
                <TheFooter />
            </>
        )
    }
}

export default Cities