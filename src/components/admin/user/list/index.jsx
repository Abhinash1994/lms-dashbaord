import React, { Component } from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default class list extends Component {
    render() {
        return (
            <div>
                <div className="page-head">
                    <div className="row">
                        <div className="col-sm-6 text-head">
                            <span className="material-icons" style={{ color: "#fff" }}>
                                <SupervisorAccountIcon />
                            </span>
                            <h3>List</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
