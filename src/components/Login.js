import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/authAction';
import classnames from 'classnames';

class Login extends Component{
  state = {
    email : '',
    password: '',
    errors : ''
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email : this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
    console.log(userData);
  }
  render(){
    const {errors} = this.state;

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
                    <input name="email"
                           className= {classnames("form-control form-control-lg", {
                              "is-invalid" : errors.email
                           })}
                           type='email' placeholder="Enter a valid email"
                           value={this.state.email} onChange={this.onChange} />
                         {errors.email && <div className="invalid-feedback">errors.email</div>}
                  </div>
                  <div className="form-group">
                    <input name="password"
                           className={classnames( "form-control form-control-lg", {
                             "is-invalid": errors.password
                           })}
                           type="password" placeholder="Enter password"
                           value={this.state.password} onChange={this.onChange} />
                         {errors.password && <div className="invalid-feedback">errors.password</div>}
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

const mapStateToProps = (state) => ({
  auth : state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
