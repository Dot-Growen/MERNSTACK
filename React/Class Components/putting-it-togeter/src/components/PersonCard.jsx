import React, { Component } from 'react';
import '../App.css';
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }

    birthday = () => {
        this.setState({
            age: this.state.age + 1
        })
    }


    render() {
        const { firstName, lastName, hairColor } = this.props
        return (
            <div className="p-card">
                <h2>{firstName}, {lastName}</h2>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {hairColor} </p>
                <button onClick={this.birthday}> Birthday button for {firstName} {lastName} </button>
            </div>
        );
    }
}
export default PersonCard;