import { Component } from "react";
export default class Logout extends Component {
    render() {
        localStorage.removeItem('token')
        localStorage.removeItem('decentrizationId')
        localStorage.removeItem('username');
        localStorage.removeItem('passportPhoto');
        localStorage.removeItem('applicantPhoto');
        return (window.location.href="/auth/login")
    }
}