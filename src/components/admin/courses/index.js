import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Workshop from './workshop';
import Livesession from './live-session';

export default class Courses extends Component {
    render() {
        const { match } = this.props;
        return (
          <main>
            <div className="wrapper">
              <div className="content-wrapper">
                <div className="main-content">
                  <Switch>
                    <Route path={`${match.path}/workshop`} component={Workshop} />
                    <Route path={`${match.path}/live-session`} component={Livesession} />
                  </Switch>
                </div>
              </div>
    
            </div>
    
    
          </main>
        );
      }
}
