import React from 'react'
import Header from '../components/Header'
import City from '../components/City'
import TheFooter from '../components/TheFooter'
import { Row } from 'react-materialize'



class Cities extends React.Component {

    state = {
        cities: [],
        citiesfiltradas:[]
    }

    async componentDidMount() {
           const responseApi  = await fetch('http://127.0.0.1:5000/api/cities')
           const infoApi = await responseApi.json()
            const dataCity = infoApi.City
            // console.log(infoApi)
            this.setState({
                cities: dataCity,
                citiesfiltradas: dataCity
            })
           }

           capturarValor= e =>{
            const valorBuscado = e.target.value
            const filtradosCity = this.state.cities.filter(city =>city.name.trim().toLowerCase().indexOf(valorBuscado.trim().toLowerCase())===0)
            this.setState({
                citiesfiltradas: filtradosCity
            })
         }
            
        render() {
            console.log(this.state.cities)

        return (
            <>
                <Header />
               
             
                <h1 style={{textAlign:'center', color:'#EAB14D', fontSize:'3em', fontWeight:'bold'}}>Lista de Ciudades</h1>
                <Row className="container">
                <div class="input-field col s12">
                   <input className="center imput-cities" type="text"  name="city" id="city" placeholder="What city are you looking for?"
                    onChange={this.capturarValor}/>
                </div>
                </Row>
                 <div className="row">
                            {this.state.citiesfiltradas.map(city=>{
                                return <City city={city}/>
                            })}
                </div >
                <TheFooter />
            </>
        )
    }
}

export default Cities