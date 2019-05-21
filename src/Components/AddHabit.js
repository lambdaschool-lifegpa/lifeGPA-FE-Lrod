import React from "react";

class AddHabit extends React.Component {
    state = {
        habit: '',
        category: '',
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    render(){
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    name="habit"
                    value="this.state.habit"
                    onchange={this.handleChange}
                    placeholder="New Habit"
                    />
                    <input 
                    type="text"
                    name="category"
                    value="this.state.category"
                    onchange={this.handleChange}
                    placeholder="Category"
                    />
                </form>
            </div>
        )
    }
}