import React from 'react'
import { NavLink } from 'react-router-dom'
import City from '../components/City'


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

           handleChange= e =>{
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
                 <div>
                   <h1>Lista de Ciudades</h1>
                   <input type="text"  name="city" id="city" placeholder="What city are you looking for?"
                    onChange={this.handleChange}/>
                    <div className="row">
                        <ul>
                            {this.state.citiesfiltradas.map(city=>{
                                return <City city={city}/>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Cities