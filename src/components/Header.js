import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions/authAction';

class Header extends Component {
  onLogout = (e) => {
    e.preventDefault();

    this.props.logoutUser();
  }
  render(){
    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="" onClick={this.onLogout} className="nav-link">Logout
            <img src={user.avatar} alt={user.name} style={{width: '25px',marginRight: '5px'}}/>
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-link">Sign up</NavLink>
        </li>
      </ul>
    );
    return(
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <NavLink to="/" className="navbar-brand">ParkEasy</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth:state.auth
})

export default connect(mapStateToProps, {logoutUser})(Header);
