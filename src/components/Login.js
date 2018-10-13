import React, {Component} from 'react';

class Login extends Component{
  state = {
    error : ''
  }
  async validateUser(url,data){
    const response = await fetch(url, {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const mail = e.target.elements.mail.value;
    const password = e.target.elements.password.value;
    if (mail.length > 0 && password.length > 0) {
      const data = {
        email : mail,
        username : password
      }
      this.validateUser('https://jsonplaceholder.typicode.com/users',data)
          .then(data => console.log(data))

      this.setState({error : ''});
    }else {
      this.setState({error : 'Enter valid data'})
    }
  }
  render(){
    return(
      <div>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">Sign in to your ParkEasy account</p>
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <input name="mail" className="form-control form-control-lg" type='email' placeholder="Enter a valid email" />
                  </div>
                  <div className="form-group">
                    <input name="password" className="form-control form-control-lg" type="password" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-dark text-white mt-5 p-3 text-center">
          Copyright &copy; 2018 Dev Connector
        </footer>
      </div>
    );
  }
}

export default Login;
