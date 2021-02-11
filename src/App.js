import React ,{ Fragment } from 'react';
import './App.css';

import User from './component/Users/User'
import NotFound from './component/NotFound'
import Navbar from './component/Navbar/Navbar'
import Home from './component/home'
import Alert from './component/Alertuser/Alert'
import About from './component/Pages/About'
import GithubState from '../src/Context/github/GithubState'
import AlertState from './component/Alertuser/AlertState'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'


const App =()=> {
return (
      <GithubState>
        <AlertState>
      <Router>
      
        <div className="App">
      <div>
  <Navbar/>

  <div className="container"> 
  <Alert alert={alert}/>
  <Switch>
    <Route exact path='/' component={Home}/>
   <Route exact path ='/about' component={About}/>
   <Route exact path='/user/:login' component={User} />
    <Route  component={NotFound}/>
  </Switch>
  

  </div>
   
  

  </div>

      </div>
      </Router>
      </AlertState>
 </GithubState>

    )
  }
export default App;