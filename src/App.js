import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Component404 from "./profile/components/Component404";
import ShowProfile from "./profile/ShowProfile";
import axios from "axios";


export default class App extends Component {
  state = {
    loading: true,
    error: "",
    data: null
  };
  
  loadData = () => {
    
    this.setState({ loading: true });
    return axios
      .get(`http://localhost:3500/Profile/5dd7f9c6985b0349d4154cdf`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
          loading: false,
          error: false
        });
      })
      .catch(error => {
        console.error("error: ", error);
        this.setState({
          // objects cannot be used as a react child
          // -> <p>{error}</p> would throw otherwise
          error: `${error}`,
          loading: false
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { loading, error, data } = this.state;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return (
        <p>
          There was an error loading.{" "}
          <button onClick={this.loadData}>Try again</button>
        </p>
      );
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/Profile"
            render={props => (
              <ShowProfile {...props} response={data} />
            )}
          />
          {/* <Route path="/contact" render={(props) => <Contact {...props} name="Yazeed" />} /> */}
          <Route path="*" component={Component404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
