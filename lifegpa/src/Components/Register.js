import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

class Register extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                fullName: '',
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
        console.log(creds);
        e.preventDefault();
        // axios 
        //     .post("https://localhost:4444/api/register", creds)
        //     .then(res => this.setState({ credentials: {
        //         username: '',
        //         fullName: '',
        //         password: '',
        //         email: '',
        //     }}))
        //     .catch(err => console.log(err))
        // hard code token for testing 
    };

    render(){
        if (this.props.loggingIn) {
            return (<span>...loading</span>)
        }
        return (<div>
            <form>
                <input 
                type="text"
                name="fullName"
                value={this.state.credentials.fullName}
                placeholder="fullName"
                onChange={this.handleChange}
                />
                <input 
                type="text"
                name="username"
                value={this.state.credentials.username}
                placeholder="username"
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
                (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) : ('Register')}</button>
            </div>)
    }
}


export default Register;