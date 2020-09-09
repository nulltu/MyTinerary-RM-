import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import 'materialize-css/dist/css/materialize.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import CityItinerary from './components/CityItinerary'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Logout from './components/Logout'


class App extends React.Component{

  render(){

    return (
    
      <>  
          <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cities' component={Cities}/>
          <Route path='/cityItinerary/:id' component={CityItinerary}/>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/logout' component={Logout}/>
          <Redirect to='/'/>
          </Switch>
          </BrowserRouter>

            
      </>
    )
  }
}

export default App;