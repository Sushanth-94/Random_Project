import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import DashBoard from './DashBoard';
import Header from './Header';

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route path='/dash' component={DashBoard} />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;
