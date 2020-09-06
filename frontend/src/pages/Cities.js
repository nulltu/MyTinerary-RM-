import React from 'react'
import City from '../components/City'
import { Row } from 'react-materialize'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import Footer from '../components/Footer'


class Cities extends React.Component {

 
            componentDidMount() {   
            this.props.getInfo()  
        }

           capturarValor= e =>{
            const valorBuscado = e.target.value
            this.props.citiesFiltered(valorBuscado)

         }
            
        render() {

            if (this.props.filteredCities === null) {
                return (
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                )
            }
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
                            {this.props.filteredCities.map(city=>{
                                return (
                                <>
                                <City city={city}/>
                                </>
                            )})}
                </div >
                <div className="center" style={{marginTop:'3em'}}>
                        <Link to="/"><i class="large material-icons itinerary">arrow_back</i></Link>
                </div>                                     
                <Footer />
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        cities:state.cities.listCities,
        filteredCities: state.cities.filteredCities
    }
}

const mapDispatchToProps = {
    getInfo: citiesActions.getInfo,
    citiesFiltered:citiesActions.citiesFiltered
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)