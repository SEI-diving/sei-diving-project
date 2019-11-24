import React, { Component } from "react";
import axios from "axios"
import {Nav} from "react-bootstrap";

export default class Show extends Component {
  state = {
    trips: {}
  };
  componentDidMount() {
    axios.get(`http://localhost:3001/trips`)
      .then(res => {
      console.log(res);
      const data = res.data;
      this.setState({ trips: data });
      console.log(data)
    });
  }
  render() {
      console.log(this.state.trips)
      let course = this.props.courses.map(item => {})
    return (
      <div>
      </div>
    );
  }
}
