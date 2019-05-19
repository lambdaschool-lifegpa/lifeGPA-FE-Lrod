import React from "react";

import Loader from "react-loader-spinner";

class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    logIn = e => {
        e.preventDefault();
        this.props.logIn(this.state.credentials)
            .then((res) =>{
                if (res) this.props.history.push('/protected')
            });
    };

    render(){
        if (this.props.loggingIn) {
            return (<span>...loading</span>)
        }
        return (<div>
            <form onSubmit={this.logIn}>
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
            </form>
            <button onClick={this.logIn}>{this.props.loggingIn ? 
                (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) : ('Log In')}</button>
            </div>)
    }
}


export default Register;