import React from 'react'
import City from '../components/City'
import TheFooter from '../components/TheFooter'
import { Row } from 'react-materialize'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


class Cities extends React.Component {

    state = {
        filteredCities:[]
    }

    //      componentDidMount() {   
    //         this.props.getInfo()  
    //         setTimeout(() => {
    //             this.setState({ filteredCities: this.props.list.listCities 
    //             }) 
    //             console.log(this.state.filteredCities)   
    //         }, 3000);  
    //  }

            componentDidMount() {   
            this.props.getInfo()  
            setTimeout(() => {
                this.setState({ filteredCities: this.props.list.listCities 
                }) 
            }, 2000)  
     }

           capturarValor= e =>{
               //tomo el value del input
            const valorBuscado = e.target.value
            //creo una constante y hago un filter del array cities
            const filterCities = this.props.list.listCities.filter(city =>city.name.trim().toLowerCase().indexOf(valorBuscado.trim().toLowerCase())===0)
            this.setState({
                filteredCities: filterCities
            })
         }
            
        render() {
            // console.log(this.props.list.listCities)
        return (
            <>
                <h1 style={{textAlign:'center', color:'#EAB14D', fontSize:'3em', fontWeight:'bold'}}>Cities</h1>
                <Row className="container">
                <div className="input-field center container" style={{width:'40vw'}}>
                     <input className="center imput-cities" type="text" data-length="10"  name="city" placeholder="What city are you looking for?" id="city" 
                    onChange={this.capturarValor}/> 
                   
                </div>
                </Row>
                 <div className="row">
                            {this.state.filteredCities.map(city=>{
                                return (
                                <>
                                <City city={city}/>
                                </>
                            )})}
                </div >
                <div className="center" style={{marginTop:'3em'}}>
                        <Link to="/"><i class="large material-icons itinerary">arrow_back</i></Link>
                </div>                                     
                <TheFooter />
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        list:state.cities
    }
}

const mapDispatchToProps = {
    getInfo: citiesActions.getInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)