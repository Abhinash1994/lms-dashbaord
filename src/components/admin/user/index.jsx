import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import List from './list';
import Customer from './customer';

export default class User extends Component {
    render() {
        const { match } = this.props;
        return (
          <main>
            <div className="wrapper">
              <div className="content-wrapper">
                <div className="main-content">
                  <Switch>
                    <Route path={`${match.path}/list`} component={List} />
                    <Route path={`${match.path}/customer`} component={Customer} />
                  </Switch>
                </div>
              </div>
    
            </div>
    
    
          </main>
        );
      }
}
