import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Flux from './flux';
import Config from './config';
import App from './modules/app/flux/app.js'

//
// Import the main css which
// should include all others
//
import './index.css';

//
// Render the app
//
ReactDOM.render(
  <Flux initialState={{
    config: Config
  }}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Flux>,
  document.getElementById('root')
);
