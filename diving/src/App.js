import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import Home from './HomePage/homepage'
import './App.css'
import {
  BrowserRouter, Switch,
  Route, NavLink
} from 'react-router-dom';
import Courses from './Coruses/courses'
export default class App extends Component {
  render() {
    return (
      <div >
     <Navbar  fixed={'top'} >
        <Navbar.Brand href="/home">
        
          <img
            src="https://i.ibb.co/SNwBCxn/Screen-Shot-1441-03-23-at-10-20-33-PM.png"
            width="190"
            height="130"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
                  <BrowserRouter>
<Navbar className="d-flex flex-row-reverse bd-highlight"  fixed={'top'} style = {{ marginTop:"103px", fontSize:"20px" ,opacity: "1"} }>
        <Nav >
      <NavLink  className="nav-link" to="/trips">Diving Trips</NavLink>
      <NavLink  className="nav-link" to="/courses"> Diving Courses</NavLink>
      <NavLink className="nav-link"to="/Equpment"> Equpment</NavLink>
      <NavLink className="nav-link" to="/locations">Locations</NavLink>
  </Nav>
  
    </Navbar>
    </BrowserRouter>
        </Navbar.Brand>

 
 </Navbar>
 <BrowserRouter>
    <Switch>
<Route exact path='/' component={Home} />

    <Route exact path='/home' component={Home} />
    <Route exact path='/courses' component={Courses} />
    </Switch>
    </BrowserRouter>

      </div>
    )
  }
}

