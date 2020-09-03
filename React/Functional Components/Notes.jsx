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


import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;


//********* Conditional Rendering **********\\

// By default, hasBeenSubmitted is false
// When the form is submitted this value in state will be flipped to true


import react, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <form onsubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div>
                <label>Username: </label>
                <input type="text" onchange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onchange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onchange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;

// Alternate method with Ternary Operator for above form
<form onsubmit={createUser}>
    {
        hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3>
    }
    <div>
        <label>Username: </label>
        <input type="text" onchange={(e) => setUsername(e.target.value)} />
    </div>
</form>

// Handling validation with Ternary Operator
// Here we can use the fact that JavaScript will treat an empty string as being "falsy" to make our ternaries easier to write. 
const MovieForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState(""); // empty string as being "falsy"

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if (e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        }
    }

    {/* rest of component removed for brevity */ }

    return (
        <form onsubmit={(e) => e.preventDefault()}>
            <div>
                <label>Title: </label>
                <input type="text" onChange={handleTitle} />
                {
                    titleError ?
                        <p style={{ color: 'red' }}>{titleError}</p> :
                        ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
}


//********* Iterating with map **********\\

// the result of calling the map method is a new array; it doesn't change the original.

let new_array = arr.map((currentValue, currentIndex, thisArray) => {
    // transform the value here
})

// Example
import React from 'react';
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>{
            groceryList.map((item, i) =>
                <li key={i}>{item}</li>
            )
        }</ul>
    );
}

export default Groceries;


//********* Lifting State **********\\

// Where sending a function with the prop name "onNewMessage" from App.js to MessageForm
// then MessageForm is using that prop to send back a value that's is now an input to youveGotMail 

// App.js
function App() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( newMessage );
    }
    
    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentmsg } />
        </>
    );
}
    


// MessageForm.jsx
const MessageForm = (props) => {
    const [msg, setMsg] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
    };


    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};

// MessageDisplay.jsx
const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <p>{props.message}</p>
        </>
    );
};

// 
