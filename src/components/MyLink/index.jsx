import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyLink extends Component {
    render() {
        return (
            <NavLink activeClassName="linkStyle" className="list-group-item" {...this.props}/>
        );
    }
}

export default MyLink;