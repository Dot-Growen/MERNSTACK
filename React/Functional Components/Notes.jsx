//ENTER => FUNCTIONAL COMPONENTS

//********* Functional Component **********\\

import React from 'react';
const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
}
export default PersonCard;

<PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />
//Note: we can pass down a string with or without curly braces.


//********* UseState **********\\

//We can access the current state via state and then change the state via setState
// WITH AN OBJECT
import React, { useState } from 'react';

const Counter = props => {
    const [state, setState] = useState({
        clickCount: 0
    });

    const handleCLick = () => {
        setState({
            clickCount: state.clickCount + 1
        })
    }

    return (
        <div>{state.clickCount}
            <button onClick={handleCLick}>click me</button>
        </div>
    )
}
export default Counter;

// WITHOUT AN OBJECT
import React, { useState } from 'react';


const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            {count}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default Counter;

//********* Forms **********\\

// e.target is the "target" of the the event, in other words the <input /> element
// e.target.value is the information currently typed into the input.

// After sumbitting we want to prevent the default form behavior by using e.preventDefault() The default form behavior is submitting the information to the route in the "action" which causes a page load. We want to handle this information ourselves.

// Instead of... const newUser = { username: username, email: email, password: password };
// We used... const newUser = { username, email, password }; if we are happy having the key receive the same name as our variables.

// To have form empty after submission put... <input type="text" onchange={ (e) => setUsername(e.target.value) } value={ username } /> then in createUser function... setUsername(""); to set it back to empty


import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;