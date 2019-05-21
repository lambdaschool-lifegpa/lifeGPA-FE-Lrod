import React from 'react';
import axios from 'axios';
import HabitList from './HabitList';

class Dashboard extends React.Component {
    // componentDidMount(){
    //     axios
    //         .get("https://newlifegpa.herokuapp.com/api/users/${id}")
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }
    render() {
        return (
        <div>
            <h1>Dashboard</h1>
            {/* <HabitList /> */}
        </div>
        )
    }
}

export default Dashboard;