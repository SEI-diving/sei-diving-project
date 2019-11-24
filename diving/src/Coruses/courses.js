import axios from 'axios'
import React, { Component } from 'react'
import {
    BrowserRouter, Switch,
    Route, NavLink
  } from 'react-router-dom';
import {Card,Button,Col,Row , Image} from 'react-bootstrap'
import './courses.css'
import Show from './showCourse'
export default class courses extends Component {

// state = {
//         courses: []
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:5000/corses`)
//         // .then(res => res.json())
//           .then(res => {
//               console.log(res);
//             const data = res.data;
//             this.setState({ courses:data });
//           })
//       }

    render() {


  let course = this.props.courses.map(item => 
  //   <Card className="span">
  //   <Card.Img  style={{width:"150px", height:"100px"}} variant="left" src={item.ImageUrl} />

  //   <Card.Body>
  //     <Card.Text>
  //     {item.Description}
  //     </Card.Text>
  //   </Card.Body>
  //   <NavLink className="btn btn-primary btn-block" to={`/courses/${item._id}`}>Book Now</NavLink>


  // </Card>
<section>
  <div class="container py-3">
    <div class="card" style={{margin:"0 auto",width:"65%", height:"65%"}}>
      <div class="row ">
        <div class="col-md-4">
            <img style={{width:"150px", height:"200px"}} variant="left" src={item.ImageUrl} class="w-100"/>
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title">{item.CourseTitle}</h4>
              <p class="card-text">{item.overview} </p>
              <p class="card-text">{item.Price}</p>
              <NavLink className="btn btn-primary " to={`/courses/${item._id}`}>Book Now</NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
</section>
 




//     <Row >
//     <Col sm={3} >
//     <Card id="ld-flex flex-row-reverse bd-highlight" style={{ width: '18rem' }}  className="flex-column" >
//   <Card.Img className="CourseImg" variant="top" src={item.ImageUrl} />
 
//   <Card.Body className="CourseBody" >
         
//     <Card.Title>{item.CourseTitle}</Card.Title>
//     <Card.Text >
//     {item.Description}
   
//     </Card.Text>
//     <NavLink className="btn btn-primary btn-block" to={`/courses/${item._id}`}>Book Now</NavLink>
//     {/* <Button  href={`/courses/${item._id}`} variant="primary" > Book Now</Button> */}
//   </Card.Body>
// </Card>
// </Col>
//   </Row>
  ) 
 
        return (
            <div style = {{ marginTop:"190px"}}>

        {course}
            </div>
        )
    }
}
