 import React, { Component } from 'react'
 import './homepage.css'

 import DatePicker from 'react-date-picker';

export default class homepage extends Component {

    state = {
        date: 'dd'/'ww'/'yyyy' 
      }
      onChange = date => this.setState({ date })
    render() {
        return (
            <div className="backGraound">
            <div className ="FindTrip" >Find Trip
 
            </div>
         <div className="calnder" >
            <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
            </div>
            </div>
        )
    }
}
