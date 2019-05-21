import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem("token")
        this.props.history.push('/')
    }

    render() {
        const loginLink = (
            <ul className="navbar">
                <li className="nav-item">
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </li>
            </ul>
        )
        
        const userLink = (
            <ul className="navbar">
                <li className="nav-item">
                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <div>
                <ul className="navbar">
                    <li className="nav-item">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                </ul>
                {localStorage.token ? userLink : loginLink}
            </div>
        )
    }
}

export default withRouter(NavBar);