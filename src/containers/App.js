import React, { Component } from 'react';
//import {withRouter, Redirect} from 'react-router-dom';
import  '../styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : ''
    }
  }
  componentDidMount = () => {
    this.getLocation()
  }
  getLocation = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
          alert("Geolocation is not supported by this browser.");
      }
  }
   showPosition = (position) => {
      console.log( "Latitude: " + position.coords.latitude +
      "Longitude: " + position.coords.longitude );
  }
  render() {
    return (
      <div className="landing">
      </div>
    );
  }
}

export default App;
