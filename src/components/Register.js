import React,{Component} from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registerUser} from '../redux/actions/authAction';
import {withRouter} from 'react-router-dom';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard');
    }
  }
  
  componentWillReceiveProps = (nextProps) => {
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

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(userData, this.props.history);
    console.log(userData);
  }

  render(){
    const {errors} = this.state;

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h2> Join ParkEasy</h2>
            <p>Create your account</p>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input placeholder="Name"
                       className={classnames("form-control form-control-lg", {
                         "is-invalid": errors.name
                       })}
                       type="text" value={this.state.name}
                       onChange={this.onChange} name="name"/>
                     {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <input placeholder="Email address"
                       className={classnames("form-control form-control-lg", {
                         "is-invalid": errors.email
                       })}
                       type="email" name="email" value={this.state.email}
                       onChange={this.onChange}/>
                     {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <input placeholder="Password"
                       className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password
                        })}
                       type="password" name="password" value={this.state.password}
                       onChange={this.onChange}/>
                     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="form-group">
                <input placeholder="Confirm your Password"
                       className={classnames("form-control form-control-lg", {
                         "is-invalid": errors.password2
                        })}
                       type="password" name="password2"value={this.state.password2}
                       onChange={this.onChange}/>
                     {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
              </div>
              {errors.message && <div className="alert-danger">{errors.message}</div>}
              <button type="submit" className="btn btn-info btn-block mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth : state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{registerUser})(withRouter(Register));
