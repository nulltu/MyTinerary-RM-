import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import 'materialize-css/dist/css/materialize.css'
import '../src/styles/globals.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'



class App extends React.Component{

  render(){

    return (
    
      <>
          <BrowserRouter>
          <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/cities' component={Cities}/>
          <Redirect to='/home'/>
          </Switch>
          </BrowserRouter>

            
      </>
    )
  }
}

export default App;