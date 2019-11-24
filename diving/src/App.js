import React, { Component } from 'react'
import { Navbar,Nav ,Form,FormControl,Button} from 'react-bootstrap'
import Home from './HomePage/homepage'
import './App.css'
import {
  BrowserRouter, Switch,
  Route, NavLink
} from 'react-router-dom';
import axios from 'axios'
import Courses from './Coruses/courses'
import Show from './Coruses/showCourse'
export default class App extends Component {
  state = {
    courses: []
}

// componentDidMount() {
//     axios.get('http://localhost:5000/corses')
//     // .then(res => res.json())
//       .then(res => {
//           console.log(res);
//         const data = res.data;
//         this.setState({ courses:data });
      
//       })
    
      
//   }

// state ={
//   movies : []
// }

getCourses = () => {
  fetch('http://localhost:5000/corses')
  .then(res => res.json())
  .then(result => { console.log(result);

    this.setState({ courses : result})})
  .catch(e => console.log(e))
}

componentDidMount(){
  this.getCourses()
}

  render() {

    return (
      <div >

 <Navbar fixed={'top'} style={{backgroundColor:"white",  width: "1440px;"

,height: "91px",  backgroundColor: "#1e56a0" }}  expand="lg">
  <Navbar.Brand href="/home"> <img
            src="https://i.ibb.co/B4r08CS/wave.png"
            width="130"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Form inline>
    <a href ="/profile"><img
            src="https://www.pngrepo.com/download/48656/scuba-diver.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></a>
      <a href ="/cart"><img
            src="https://image.flaticon.com/icons/png/512/34/34627.png"
            width="20"
            height="20"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></a>
    </Form>
  </Navbar.Collapse>
  <BrowserRouter>
<Navbar className="d-flex justify-content-around"  fixed={'top'} style = {{ marginTop:"90px", fontSize:"20px" ,opacity: "1",backgroundColor: "#d6e4f0"} }>
        <Nav >
      <NavLink  className="nav-link" to="/trips">Diving Trips</NavLink>
      <NavLink  className="nav-link" to="/courses"> Diving Courses</NavLink>
      <NavLink className="nav-link" to="/locations">Locations</NavLink>
  </Nav>
    </Navbar>
    </BrowserRouter>
</Navbar>
 <BrowserRouter>
    <Switch>
<Route exact path='/' component={Home} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/courses'  render={(props) => <Courses {...props} courses={this.state.courses} />} />
     <Route path="/courses/:id" render={({match}) => {
            if(!this.state.courses) return <div className="work">error</div>   
            return <Show 
            course={this.state.courses.find(course => course._id === match.params.id) } />
              }          
          } /> 
    </Switch>
    </BrowserRouter>
    
    <footer className = "footer">
    <div class="d-flex justify-content-around">
    <p>About us</p> 
    <p>Safety &Fairst Aid</p>
    <p>Careers</p>
    <p>Contact us</p>
    <p>Diving Brochure</p>
    </div>
  </footer>
      </div>
    )
  }
}

