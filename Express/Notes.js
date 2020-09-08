//ENTER => EXPRESS

// HTTP Methods

// GET is used for passing insensitive information
// POST is used for passing sensitive information.
// PUT is used for passing updating whole sensitive information.
// PATCH is used for passing updating pieces of sensitive information.
// DELETE is used for passing deleting sensitive information.

//****** Creating our server ******\\

const express = require("express");
const app = express();
// req is short for request
// res is short for response
app.get("/", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


//**** Ongoing server (install nodemon) ****\\

// npm install -g nodemon
// Command => "nodemon"

//****** GET Data ******\\

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

//****** POST Data ******\\

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data.

// Get form data
app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json({ status: "ok" });
});


//****** Route Parameters ******\\

// Getting Data from a URL

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id);
  // assuming this id is the index of the users array we could return one user this way
  res.json(users[req.params.id]);
});

// Update Data

app.put("/api/users/:id", (req, res) => {
      // we can get this `id` variable from req.params
      const id = req.params.id;
      // assuming this id is the index of the users array we can replace the user like so
      users[id] = req.body;
      // we always need to respond with something
      res.json( { status: "ok" } );
  });

// Deleting Data

app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});



//****** install faker.js ******\\