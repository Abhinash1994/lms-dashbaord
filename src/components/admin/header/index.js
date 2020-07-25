import React, { Component } from 'react';
import logo from './logo-light.png';
import { Link } from 'react-router-dom';
import API from '../../api';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { userdata: '' }
    }
    componentDidMount() {
        let email = localStorage.getItem('email')
        new API().getHttpClient().get('/auth/getUserByEmailId?email=' + email).then((res) => {
            this.setState({ userdata: res.data.data })
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        let self = this.state.userdata;
        let username = self.firstName + ' ' + self.lastName;
        return (

            <nav className="sidebar sidebar-bunker">
                <div className="sidebar-header">
                    <a href="/" className="sbar-logo">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="profile-element d-flex align-items-center flex-shrink-0">

                    <div className="profile-text">
                        <h6 className="m-0">{username ? username : self.email}</h6>
                    </div>
                </div>
                <div className="sidebar-body">
                    <nav className="sidebar-nav">
                        <ul className="metismenu">
                            <li className="nav-label">Main Menu</li>
                            <li className="mm-active">
                                <a href="/admin"> <i className="typcn typcn-document-text mr-2"></i>Dashboard</a>
                            </li>

                            <li>
                                <a className="has-arrow material-ripple" href="#">
                                    <i className="typcn typcn-th-large mr-2"></i>
                                    Manage Courses
                                </a>
                                <ul className="nav-second-level">
                                    <li><Link to="/admin/course/workshop">Workshops</Link></li>
                                    <li><Link to="/admin/course/live-session">Live Sessions</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/admin/user/list"> <i className="typcn typcn-user mr-2"></i>Administrator</Link>
                            </li>
                            <li>
                                <Link to="/admin/user/customer"> <i className="typcn typcn-user mr-2"></i>Customer</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>

        );
    }
};
