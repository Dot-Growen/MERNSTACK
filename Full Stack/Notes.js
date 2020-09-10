// ENTER => FULL STACK MERN

//******* Setting up MERN *******\\

// npm init -y
// npm install express
// npm install mongoose
// npx create-react-app client
// npm install cors
// npm install axios

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
