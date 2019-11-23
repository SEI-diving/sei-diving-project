import React, { Component } from 'react'

export default class DivingLocations extends Component {

    render() {
       
        return (
            <div>
               <iframe title="DivingLocations" width="100%" height="800" frameBorder="0" style={{border:0}}
src={`https://www.google.com/maps/embed/v1/place?q="21.599033,39.064878"&zoom=11&center=21.4858%2C39.1925&key=AIzaSyCi9DCG3wzcPg5zStmT1S87x4oYyEXmfLo` } allowFullScreen></iframe> 
            </div>
        )
    }
}


