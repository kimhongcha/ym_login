
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginContainer from './LoginContainer';
import SigninContainer from './SigninContainer';

class App extends Component {
  render(){
    return(
      <div>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginContainer}/>
                <Route path="/SigninContainer" component={SigninContainer}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
