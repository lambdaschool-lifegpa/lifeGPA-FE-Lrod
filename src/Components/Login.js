import React from "react";
// import Loader from "react-loader-spinner";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);    
        this.state = {
            isLoggedIn: false,
            credentials: {
                username: '',
                password: ''
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

    login = e => {
        const creds = this.state.credentials;
        e.preventDefault();
        console.log(creds);
        axios
        .post("https://newlifegpa.herokuapp.com/api/login", creds)
        .then(res=> {
            localStorage.setItem("token", res.data.token)
            this.setState({ isLoggedIn: true })
            // this.props.history.push("/dashboard")
        })
        .catch(err=> console.log(err))
    }

    render(){
        if (this.state.isLoggedIn) {
            return (<Redirect to='/dashboard' /> )
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
                type="password"
                name="password"
                value={this.state.credentials.password}
                placeholder="password"
                onChange={this.handleChange}
                />
            </form>
           <button onClick={this.login}> Login </button>
            </div>)
    }

}


export default Login;