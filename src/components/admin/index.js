import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './header';
import Footer from './footer'
import SideBar from './sidebar';
import Courses from './courses';
import User from './user';
import dashboard from './dashboard';

export default class Main extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        <div className="wrapper">
          <Header />
          <div className="content-wrapper">
            <div className="main-content">
              <SideBar />
              <Switch>
                <Route exact path={[`${match.path}/dashboard`, `${match.path}`]} component={dashboard} />
                <Route path={`${match.path}/course`} component={Courses} />
                <Route path={`${match.path}/user`} component={User} />
              </Switch>
              <Footer />
            </div>
          </div>

        </div>
              

      </main>
    );
  }
}