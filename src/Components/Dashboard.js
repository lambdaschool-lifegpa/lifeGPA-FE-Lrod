import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
    constructor() {
        super()
       
    }
    componentDidMount(){
        axios
            .get("https://newlifegpa.herokuapp.com/api/users/${id")
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        return (<div>
            <h1>Dashboard</h1>
        </div>)
    }
}

export default Dashboard;