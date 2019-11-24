import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import './profile.css';
import 'semantic-ui-css/semantic.min.css'

export default class EditProfile extends Component {
EditProfileHandler = ()=>{
console.log("EditProfileHandler Run");


}
    //efnd
    render() {
console.log(this.props.response.result);
      const { email, bio, name, createdAt } = this.props.response.result;
      const date = createdAt.split("-")
        return (
            <Card>
       <form action={`/Profile/Edit/${this.props.match.params.id}?_method=PUT`} method="POST">
            <div className="row">  
              <div className="col-lg-12 col-md-12 col-sm-12">
          
                      <div className="card hovercard">
                          <div className="cardheader">
          
                          </div>
                          <div className="avatar">
                              <img alt="Header"  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"/>
                              </div>
                          <div className="info">
                              <div className="title">
                              <label>Name: </label>
                                 <input onChange={this.EditProfileHandler} type="text" name="name" placeholder={name} />
                              </div>
                              
                              
                          </div>
                          <div className="desc">
                          <label>Bio: </label>
                          <input onChange={this.EditProfileHandler} type="text" name="bio" placeholder={bio} />
                          </div>
                          
                          
                          <div className="bottom">
                          <label>Email: </label>
                          <input onChange={this.EditProfileHandler} type="email" name="email" placeholder={email} />
                              
                              
                          </div>
                          
                          <div className="desc">Profile Created: {date[0]}-{date[1]}</div>
                      </div>
{/* <input type="submit" value="submit" /> */}
<div className="ui buttons">
  <button  className="ui button">Cancel</button>
  <div className="or"></div>
  <button type="submit" className="ui positive button">Save</button>
</div>
</div>  
            </div>
            </form>
          </Card>
        )
    }
}
