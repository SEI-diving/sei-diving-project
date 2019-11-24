import React, { Component } from 'react'
import './Locations.css'

export default class DivingLocations extends Component {

    state={
        Loc:"21.599033,39.064878",
        Name:"1",
        Data:""
        
    }
    
    handelEventSelect=(Address,Name)=>{
       this.setState({Loc:Address, Name:Name})

    }
    render() {
       
        return (
            <div>

<div className="left" >
        <div className="Instructors">
          <h2 className="coror">Welcome to</h2>
          <h4 className="coror">Diving Locations</h4>
        </div>
        <div className="namebox" onClick={()=> this.handelEventSelect("21.599033,39.064878","1")}>
          <h5 className="coror"> First Address </h5>
        </div> 

        <div className="namebox" onClick={()=> this.handelEventSelect("21.493797,39.075631","2")}>
          <h5 className="coror"> Second Address </h5>
        </div>

        <div className="namebox" onClick={()=> this.handelEventSelect("21.541623,38.956837","3")}>
          <h5 className="coror"> Third Address </h5>
        </div>
<h1>{this.state.Name}</h1>
      <iframe className="frame" title="DivingLocations" width="60%" height="800" frameBorder="0" style={{border:0}}
        src={`https://www.google.com/maps/embed/v1/place?q=${this.state.Loc}&zoom=11&center=21.4858%2C39.1925&key=AIzaSyCi9DCG3wzcPg5zStmT1S87x4oYyEXmfLo` } allowFullScreen></iframe> 

      </div>
      
      
            </div>

              

        )
    }
}
