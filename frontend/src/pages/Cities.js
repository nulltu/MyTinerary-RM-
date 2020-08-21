import React from 'react'
import { NavLink } from 'react-router-dom'
import TheFooter from '../components/TheFooter'
import Digimon from '../components/Digimon'
import Header from '../components/Header'


class Cities extends React.Component {

    state = {
        digimones: [],
        digimonesFiltrados:[]
    }

    async componentDidMount() {
           const responseApi  = await fetch('https://digimon-api.vercel.app/api/digimon')
           const infoApi = await responseApi.json()
            const dataDigimon = infoApi
            console.log(infoApi)

            this.setState({
                digimones: dataDigimon,
                digimonesFiltrados: dataDigimon
            })
           }

            handleChange= e =>{
              const valorBuscado = e.target.value
              const filtradosDigimon = this.state.digimones.filter(digimon =>digimon.name.trim().toLowerCase().indexOf(valorBuscado.trim().toLowerCase())===0)
              this.setState({
                  digimonesFiltrados: filtradosDigimon
              })
           }
        render() {

        // console.log(this.state)

        return (
            <>
                <Header/>
                 <div>
                <NavLink className="wtq" to='/home'>Ir a la Home</NavLink>
                </div>
                <h1 style={{textAlign:'center'}}>Lista de Digimones</h1>
                <div className="blue" style={{color:'black', margin:'20px', textAlign:'center'}}>
                <input type="text"  name="digimon" id="digimon" placeholder="¿Qué Digimon estas buscando?"
                onChange={this.handleChange}/>
                </div>
                <div className="row">
                <ul style={{textAlign:'center'}}>
                    {this.state.digimonesFiltrados.map(digimon=>{
                        return  <Digimon digimon= {digimon}  key={digimon}/>
                    })}
                </ul> 
                </div>
              
                <TheFooter />
            </>
        )
    }
}

export default Cities