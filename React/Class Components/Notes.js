//ENTER => COMPONENTS

//******** Class Component ********\\

// Valid component need:
// 1. Have a name starting with a capital letter.
// 2. Extend React.Component.
// 3. Have a render() method that returns a React Element either by JSX or React.createElement(). Below, we are using JSX.

import React, { Component } from 'react';


class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}

export default SomeClassComponent;

//******** Props ********\\

// Prop - short for properties, is an empty object that is passed to every React component by default. 


// Passing Props down to our child component
// 1. To pass props down to our child components, we simply need to add an html attribute to our component.

import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <MyNewComponent firstName={"Lydell"} lastName={"Tyler"} />
        </div>
    );
}

export default App;

// 2. To access props in a class component, we will need to precede the props with the keyword "this"
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div>
                // By inheriting from React.Component all we need is the "this" keyword in front of props.
                <h1>My name is {this.props.firstName} {this.props.lastName}</h1>
            </div>
        );
    }
}
export default MyNewComponent;

// We could also destructure our class props this way
class Header extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <div>
                // Destructuring allows us to use them like variables. This is just a small amount of syntactical sugar.
                <h1>My name is {firstName}  {lastName}</h1>
            </div>
        );
    }
}

//******** Flow of Data ********\\

// the flow of data is downward
// We can pass down anything we want using props including functions.

<SomeComponent someProp="test" someOtherProp={ 67 }/> //Valid. We can send normal strings, but in numbers need curly braces
// <SomeComponent someProp={ "test" } someOtherProp={ 67 }/> //Valid. A String is still a Javascript expression
// <SomeComponent someProp="test" someOtherProp=67/> //Invalid. Numbers need curly braces

// In JSX, we use curly braces to denote a Javascript expression
// When in doubt, use curly braces.
