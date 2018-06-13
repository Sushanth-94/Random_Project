import React, { Component } from 'react';
//import {withRouter, Redirect} from 'react-router-dom';
import Form from './Form';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      error : ''
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    const mail = e.target.elements.mail.value;
    const password = e.target.elements.password.value;

    if (mail==='clarion@clarion.com' & password==='Clarion123') {
      this.props.history.push({
        pathname : '/dash',
        state : {name : mail}
      })
    }else {
      this.setState({
        error : 'User does not exist'
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <Form onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
