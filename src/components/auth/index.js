import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './login';
import Logout from './logout';
export default class Main extends Component {
  render() { 
    const { match } = this.props;
    return (
    	<main>
        <BrowserRouter>
          <Switch>
                <Route exact path={[`${match.path}/login`, `${match.path}`]} component={Login}/>
                <Route exact path={`${match.path}/logout`} component={Logout}/>
          </Switch>
        </BrowserRouter>
  		</main>
    );
  }
}