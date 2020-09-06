// ENTER => CLASS COMPONENTS

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

<SomeComponent someProp="test" someOtherProp={67} /> //Valid. We can send normal strings, but in numbers need curly braces
// <SomeComponent someProp={ "test" } someOtherProp={ 67 }/> //Valid. A String is still a Javascript expression
// <SomeComponent someProp="test" someOtherProp=67/> //Invalid. Numbers need curly braces

// In JSX, we use curly braces to denote a Javascript expression
// When in doubt, use curly braces.

//******** Children ********\\

// Children of components are those element(s)/component(s) that are within the two "tags" of JSX elements.
// So, we can wrap content with JSX and then nest children.
import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
    return (
        <div className="App">
            <MyNewComponent header={"Header Prop"}>
                <p>This is a child</p>
                <p>This is another child</p>
                <p>This is even another child</p>
            </MyNewComponent>
        </div>
    );
}

export default App;

// All components between these two( JSX tags ) are called "children". We can access them via the following:

import React, { Component } from 'react';

// MyNewComponent.js
class MyNewComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.header}
                </h1>
                {this.props.children}
            </div>
        );
    }
}

export default MyNewComponent;

//******** Synthetic Events ********\\

// The event names are instead camelCased vs lowercase (i.e "onclick" becomes "onClick")
// Returning false will not work with any event to prevent bubbling. You will need to manually callevent.stopPropagation() or event.preventDefault()as necessary.
// Events cannot be called asynchronously because of how React "pools" the Synthetic events

function App() {
    return (
        <button onClick={() => alert("This button has been clicked!")}>Click Me</button>
    );
}

// Output => "This button has been clicked!".

// onChange - an event that runs when a form input is changed
// onSubmit - an event that runs when a form is submitted
// onFocus - an event that is run when an element is given focus (clicked on or tabbed to)
// onBlur - - an event that is run when an loses element focus (the user clicked away)

https://reactjs.org/docs/events.html#supported-events => More Events

//******** State ********\\

// Components in React are able to hold onto their own information is inside of a variable we will be calling state. 

import react, { Component } from 'react';

// Setting a constructor for our component will let us create an attribute for our LightSwitch Component called state.(something we declare as an object)
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
        };
    }

    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button>Flip Switch</button>
            </fieldset>
        );
    }
}

export default LightSwitch;

// turns the light off
<button onClick={() => { this.setState({ position: "Off" }) }}> Flip Switch</button>

// turns the light on and off
// this method goes inside of the LightSwitch Component
flipSwitch = () => {
    if (this.state.position === "On") {
        this.setState({ position: "Off" });
    } else {
        this.setState({ position: "On" });
    }
}

<button onClick={this.flipSwitch}>Flip Switch</button>

//******** Life Cycle ********\\\

// Mounting
//=> assigning state to a component
//=> making Api Calls
//=> html content rendered
//=> network request, subscription, timer etc => componentDidMount()
// Updating
//=> This is a stage that will run every time we update the components state or properties.
// Unmounting
//=> This is the final stage in which React will unmount the component and remove it from the DOM.
//=> This is the ideal place to cancel any on-going network requests, subscriptions, or clear timers.

//******** CSS Modules ********\\\


//DIRECT IMPORT
// MyButtonComponent.js
import React, { Component } from 'react';
import './styles.css';

//CSS MODULES
// MyButtonComponent.js
import React, { Component } from 'react';
import styles from './MyButtonComponent.module.css';


class MyButton extends Component {
    render() {
        return <button className={styles.btn}>{props.children}</button>;
    }
}

export default MyButton;