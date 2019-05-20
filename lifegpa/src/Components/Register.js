import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                fullname: '',
                password: '',
                email: '',
            }
        };
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    logIn = e => {
        const creds = this.state.credentials;
        e.preventDefault();
        axios 
            .post("https://newlifegpa.herokuapp.com/api/register", {creds})
            .then(res => {
                this.setState({
                    
                })
            })
            .catch()
    };

    render(){
        if (this.props.loggingIn) {
            return (<span>...loading</span>)
        }
        return (<div>
            <form>
                <input 
                type="text"
                name="username"
                value={this.state.credentials.username}
                placeholder="username"
                onChange={this.handleChange}
                />
                <input 
                type="text"
                name="fullname"
                value={this.state.credentials.fullname}
                placeholder="fullname"
                onChange={this.handleChange}
                />
                <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                placeholder="password"
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="email"
                value={this.state.credentials.email}
                placeholder="email"
                onChange={this.handleChange}
                />
            </form>
            <button onClick={this.logIn}>{this.props.loggingIn ? 
                (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) : ('Log In')}</button>
            </div>)
    }
}


export default Register;