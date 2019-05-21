import React from 'react';
import Habit from './Habit';

class HabitList extends React.Component {
    constructor(props){
        super(props)
    };
    render(){
        console.log(this.props.habits)
        return (
            <div>{this.props.habits.map(habit => <Habit key={this.props.habits.id} habit={habit}/>)}</div>)
    }
}
export default HabitList;