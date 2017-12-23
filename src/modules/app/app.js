import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home/home';

class App extends React.Component {

  /**
   * render
   */
  render() {
    return (
    <div className="app">
      <Route exact path="/" component={Home}/>
    </div>
    );
  }
};

//
// Prop Validation
//
App.propTypes = {

};

//
// Prop Defaults
//
App.defaultProps = {

};

export default App;
