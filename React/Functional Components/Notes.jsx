//ENTER => FUNCTIONAL COMPONENTS

// "rfc" =>

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

    const youveGotMail = (newMessage) => {
        setCurrentMsg(newMessage);
    }

    return (
        <>
            <MessageForm onNewMessage={youveGotMail} />
            <MessageDisplay message={currentmsg} />
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

//********* Sending Arguments in Callbacks **********\\

// when our onClickHandler function is invoked, it will only be provided with the event as its argument
// So, we will need to send down a new callback function.
// We have defined a new inline anonymous callback function that, when invoked, will then call our onClickHandler with the appropriate item.

const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }

    return props.movies.map((item, index) => {
        return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
    });
}

//********* Other Input Types **********\\

import React, { useState } from 'react';

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {fruits.map((fruit, idx) => (
                    <option key={idx} value={fruit}>{fruit}</option>
                ))}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)} /> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}

//********* Custom Hooks **********\\

// Custom hooks allow us to take component logic that is used in multiple places and extract it for reuse
// Notice that we didn't have to import React itself here since we're not rendering any JSX
// ssume we would want a list of strings, a way to add to the list, and a way to remove from the list by index

// useList.js
import { useState } from 'react';

export default (initialList = []) => {
    const [list, setList] = useState(initialList);

    function add(str) {
        setList([...list, str]);
    }

    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }

    return {
        list,
        add,
        remove
    };
}

import React, { useState } from 'react';
import useList from './useList'; // Custom Hook

export default () => {
    const [val, setVal] = useState('');
    const { list, add } = useList(['first', 'second']);

    function handleSubmit() {
        add(val);
        setVal('');
    }

    return (
        <>
            {list.map((item, i) => <p key={i}>{item}</p>)}
            <input
                onChange={e => setVal(e.target.value)}
                value={val}
            />
            <button onClick={handleSubmit}>Add</button>
        </>
    );
}

//********* Promises **********\\

// Rejected: the outcome is completed with errors
// Resolved: the outcome is completely successfully
// Pending: the outcome is not yet determine

// while the promise is unfulfilled any code that comes after it is free to run
// We also have two distinct methods that get called where we handle the case where the promise is resolved .then() and the case where the promise is rejected .catch(). 

const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then(res => console.log(res))
    .catch(err => console.log(err));

//********* Consuming API **********\\

// The built-in method to consume data from an API in Javascript is fetch, which uses promises.
// If you were to copy this into an html file yourself and then open it, you would see the Pokemon response in the Javascript console.

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });

//********* useEffect **********\\

// We use useEffect in order to manage "side Effects" in our React project.
// this method will execute directly after the component is rendered, and every time the component updates.
// useEffect is a hook that will be called after every render 

const Example = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []); // second arguement is empty so useEffect only run at the very first render

    return (
        <div>
            {people.length > 0 && people.map((person, index) => {
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Example;

// useEffect will always run when a variable in the second argument array changes.

const [tasks, setTasks] = useState([])

useEffect(() => {
    alert("When will this run?");
}, [tasks]); // when task is updated use Effect will run

// Cleaning up on unmounting

// When the component is unmounted, as when the user changes to a different route, it is important to clean up so that your application doesn't develop a memory leak. 

// cancelling subscriptions, timer, or removing event listners

// TimeDisplay.js
import React, { useEffect, useState } from 'react';

export default () => {
    const [time, setTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );

        return function clearInt() { // removing/ clearing up the ongoing timer
            clearInterval(int);
        }
    }, []);

    return (
        <div>Current Time: {time}</div>
    );
}

//********* Axios **********\\\

// npm install axios

import axios from 'axios';

axios.get('http://www.example.com').then(response => {
    console.log(response);
})

// with useEffect
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const someComponent = props => {
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        axios.get('http://www.example.com')
            .then(response => { setResponseData(response.data) })
    }, []);
    return (
        <div>
            {responseData}
        </div>
    )
}

//********* React Router **********\\

// npm install @reach/router
// the path props tells react to go to the component LoginComponent with we go to the path /login


import React from 'react';
import { Router } from '@reach/router';
function App() {
    return (
        <div className="App">
            <Router>
                <LoginComponent path="/login" />
                <DashboardComponent path="/dashboard" />
            </Router>
        </div>
    );
}
export default App;

// LINK
// <Link> component will not refresh the page. It will simply change the url and change the DOM.

import React from 'react';
import { Link } from '@reach/router';
const NavBar = (props) => {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

// NAVIGATE 
// redirect a user to another page in your React project
// import { navigate } from '@reach/router'
// After performing some action, we can run a method such as navigate('/success'), and this will programmatically redirect the user to that front end route.


// ROUTING WITH PARAMETERS
// front end url parameters will be passed down as props to our component.

function App() {
    return (
        <div className="App">
            <Router>
                <ListOfDogsComponent path="/dogs" />
                <DetailDogComponent path="/dogs/:id" />
            </Router>
        </div>
    )
}

// Then, within our Detail dog component:

import React from 'react';
const DetailDogComponent = props => {
    return (
        <p>You are looking at the dog with id = {props.id}</p>
    )
}


