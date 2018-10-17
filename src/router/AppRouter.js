import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from '../redux/store/configureStore';

import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../components/Header';

//check for token
if (localStorage.jwtToken) {
  //set auth token headers
  setAuthToken(localStorage.jwtToken);
  //decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch({
    type: 'SET_CURRENT_USER',
    payload: decoded
  })
}

const AppRouter = () => {
  return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={App} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </div>
        </BrowserRouter>
      </Provider>
  )
}

export default AppRouter;
