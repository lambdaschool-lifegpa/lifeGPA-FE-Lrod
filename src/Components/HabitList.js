import React from 'react';

class HabitList extends React.Component {
    constructor(){
        super();
        this.state = {
            habits: [
                { habit: "Wake up on time",
                category: "Personal Goals"},
            ]
        }
    }
    render(){
        return (<div>{this.state.habits.habit} </div>)
    }
}
export default HabitList;