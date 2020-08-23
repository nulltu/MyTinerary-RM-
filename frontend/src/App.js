import React from 'react'
import Home from './pages/Home'
import Cities from './pages/Cities'
import 'materialize-css/dist/css/materialize.css'
import '../src/styles/globals.css'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'



class App extends React.Component{

  render(){

    return (
    
      <>
          <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cities' component={Cities}/>
          <Redirect to='/'/>
          </Switch>
          </BrowserRouter>

            
      </>
    )
  }
}

export default App;