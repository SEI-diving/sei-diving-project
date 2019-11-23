import axios from 'axios'
import React, { Component } from 'react'
import {Card,Button,Col,Sonnet,Tab,Nav,Row } from 'react-bootstrap'

export default class courses extends Component {

state = {
        courses: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/corses`)
          .then(res => {
              console.log(res);
            const data = res.data;
            this.setState({ courses:data });
          })
      }

    render() {
 console.log(this.state.courses);

  let course = this.state.courses.map(item => 
    <Row>
    <Col sm={3}>
    <Card id="left-tabs-example" style={{ width: '18rem' }}  className="flex-column" >
  <Card.Img variant="top" src={item.ImageUrl} />
  <Card.Body>
    <Card.Title>{item.CourseTitle}</Card.Title>
    <Card.Text>
    {item.Description}
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
</Col>
  </Row>
  ) 
        return (
            <div className="courses">

        {course}
            </div>
        )
    }
}
