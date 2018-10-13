import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from '../containers/App';
import Login from '../components/Login';
import Register from '../components/Register';
import Header from '../components/Header';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;
