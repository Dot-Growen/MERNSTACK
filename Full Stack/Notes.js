// ENTER => FULL STACK MERN

//******* Setting up MERN *******\\

// npm init -y
// npm install express
// npm install mongoose
// npx create-react-app client
// npm install cors
// npm install axios
// npm install @reach/router

// SERVER SIDE FILE/FOLDER:
// server
/// config
//// mongoose.config.js
/// controllers
//// NAME.controller.js
/// models
//// NAME.model.js
/// routes
//// NAME.routes.js
//server.js

// CLIENT SIDE:
// client
/// src
//// components
///// Persona
//// views
///// Main.js

// Hello World Set Up

// Controller.js
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// routes.js 
const PersonController = require('../controllers/person.controller');
module.exports = function (app) {
    app.get('/api', PersonController.index);
}

// server.js 
const express = require('express');
const app = express();
require('./server/routes/person.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// Now after starting server when visiting localhost:8000/api you'll see "Hello World" in postman 

// In the client directory

// npm install axios => so we can make request to our backend

// Main.js => display our message
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}

// App.js
import React from 'react';
import Main from './Main';
function App() {
    return (
        <div className="App">
            <Main />
        </div>
    );
}
export default App;

// start your client => npm start ( in the client directory )
// start your server => nodemon server.js ( in the project directtory )

// your should be seeing "Loading as your message at localhost:3000"

// npm install cors => cross-origin requests

// server.js
const express = require('express');
const cors = require('cors') // This is new
const app = express();
app.use(cors()) // This is new
require('./server/routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

//******* Adding CRUD *******\\

// config/mongoose.config.js => configuring our database
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

// models/ person.model.js
const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

// server.js
const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// controllers/person.controller.js => adding a new method to handle the creation of our person
const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

// routes.js => updated with create person POST request route
const PersonController = require('../controllers/person.controller');
module.exports = function (app) {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
}

// components/PersonForm.jsx => the form that we can add a person to and make a request to our API.
import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

// views/Main.js => updated with the PersonForm
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
export default () => {
    return (
        <div>
            <PersonForm />
        </div>
    )
}


//******* List *******\\


// A request to our api that will retrieve all of the people in our database for us.

// server/controllers/person.controller.js
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

// Add this to our routes => we can test with postman after to check if it went through
app.get('/api/people', PersonController.getAllPeople);

// components/PersonList.js => new components with the list of people
import React from 'react'
export default props => {
    return (
        <div>
            {props.people.map((person, idx) => {
                return <p key={idx}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}

// views/Main.js
// setLoaded makes it so we only output a list of people once we got a response from our api.
import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <PersonForm />
            <hr />
            {loaded && <PersonList people={people} />}
        </div>
    )
}

//******* Details *******\\

// server/controllers/person.controller.js => New method for getting the details from one person
module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.id })
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

// another route
app.get('/api/people/:id', PersonController.getPerson);

// views/Detail.js => new file for displaing the details of a person
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}

// App.js => Since we have front end routing now run npm install @reach/router within your React project.
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
    return (
        <div className="App">
            <Router>
                <Main path="people/" />
                <Detail path="people/:id" />
            </Router>
        </div>
    );
}
export default App;




