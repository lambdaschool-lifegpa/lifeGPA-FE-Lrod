import React from 'react';
import axios from 'axios';
import HabitList from './HabitList';

class Dashboard extends React.Component {
    constructor(){
        super();
            this.state = {
                habits: [],
                catergory: []
            }
    }
    componentDidMount(){
       const userToken = {headers: {Authorization: localStorage.getItem('token')}}
        axios
            .get("https://newlifegpa.herokuapp.com/api/users/habits/1", userToken)
            .then(res => this.setState({habits: res.data[0].habits}))
            .catch(err => console.log(err))
    }
    render() {
        return (
        <div>
            <h1>Dashboard</h1>
            <HabitList habits={this.state.habits}/>
        </div>
        )
    }
}

export default Dashboard;