import React, { Component } from 'react'
// import {
//     Paper, Grid, Button
// } from "@material-ui/core";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


export default class Workshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    render() {
        return (
            <div>
                <div className="page-head">
                    <div className="row">
                        <div className="col-sm-6 text-head">
                            <span className="material-icons" style={{ color: "#fff" }}>
                                <SupervisorAccountIcon />
                            </span>
                            <h3>Create Workshop</h3>
                        </div>
                    </div>
                </div>
                
            </div>


        )
    }
}
