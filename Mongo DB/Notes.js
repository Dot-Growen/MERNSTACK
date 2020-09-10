// ENTER => MongoDB

const { Mongoose } = require("mongoose");

// Copy = Ctrl + Insert
// Paste = Shift + Insert


//********* Basics *********\\

// Database: MongoDB Database (db)

// show dbs => show all data bases 
// db => show current database
// use DB_NAME => change to another database || create a database
// use DB_NAME db.dropDatabase() => Delete database
// db.dropDatabase() => Delete current database

// Tables: MongoDB (Collections)

// show collections => view all collections
// db.createCollection("COLLECTION_NAME") => creates a collection
// db.COLLECTION_NAME.drop() => delete a collection


// Row/Record: MongoDB (Document: BSON object)

// CREATE 
// db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})
// db.COLLECTION_NAME.insert({name: "Trey", belt: "black", status: "awesome"})

// READ
// db.COLLECTION_NAME.find() // retrieves all collections in the current db
// db.COLLECTION_NAME.find().pretty() // makes it look pretty
// db.COLLECTION_NAME.find({_id : ObjectId("5f5830ae7a713eb879622964")})

// DELETE
// db.COLLECTION_NAME.remove({name "Trey"}) // remove objects with the name Trey
// db.COLLECTION_NAME.remove({name "Trey"}, true) // only removes the first object with the name of Trey

// UPDATE    
// the first one is the query document, meaning that any document that will get updated must match the query
// The second document is the document that contains the fields we want to add.
// db.COLLECTION_NAME.update({name: "Trey"}, {location: "Mountain view"}) => replaces all the info with just location and the id
// db.COLLECTION_NAME.update({name: "Trey"}, {$set: {location: "Mountain view"}}) => Adds location with the existing data

//********* Operators *********\\

// https://docs.mongodb.com/manual/reference/operator/

// $set (update a value)
// $ne (not equal too)
// $eq (equal to)
// $gt (greater than) => Use to query selectively on numerical-valued fields
// $gte (greater than or equal to) => Use to query selectively on numerical-valued fields
// $lt (less than) => Use to query selectively on numerical-valued fields
// $lte (less than or equal to) => Use to query selectively on numerical-valued fields
// $in (in array) => Use to find documents who have a particular value within an array.
// $push (push) => Push to an array contained within a document. or create a new one
// $addToSet (push) => It functions just like $push.  However, $addToSet only adds to the specified array if the value doesn't already exist
// $pull => Removes a specified value from an array, unlike $pop, which removes by location. This will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.
// $pop => Removes either the first or last element from an array
// $unset => Removes a Single field

// db.students.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'snowboarding'}}) => Pushes "snowboarding" into the interest array within the student document
// {
//     "_id": ObjectId("5463dj39r5uj439rtj49rtiu39485043"),
//     "name": "Trey",
//     "interest": [
//         "coding",
//         "golf",
//         "snowboarding"
//     ]
// }



// db.dojos.find({number_of_students: {$gt: 15}}) => get all the Dojos whose number of students is greater than 15
// db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )

// db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
// db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}}) 

// db.students.update( { name: "Tyree" }, { $unset: { interest: "" } } ) // deletes specfic field="interest" from the document with the name="Tyree"

//********* Mongoose *********\\

// 1. Installing Mongoose
// initialize a package json file using npm => npm init -y
// install express and mongoose => npm install mongoose express

// 2. Require Mongoose
// const mongoose = require('mongoose);


// 3. Connecting to MongoDB with Mongoose => If you connect to a database that doesn't exist, Mongoose will create the DB for you as soon as you create your first document!
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/my_first_db", { 
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
// 	.then(() => console.log("Established a connection to the database"))
// 	.catch(err => console.log("Something went wrong when connecting to the database", err));

// 4. Create your Mongoose Schema and Model
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

// https://mongoosejs.com/docs/schematypes.html

// 5. Use the Mongoose Models to Create / Retrieve / Update / Destroy

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// 6. Routing
// const UserController = require("../controllers/user.controller");

// module.exports = app => {
//     app.get("/api/users/", UserController.findAllUsers);
//     app.get("/api/users/:id", UserController.findOneSingleUser);
//     app.put("/api/users/update/:id", UserController.updateExistingUser);
//     app.post("/api/users/new", UserController.createNewUser);
//     app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
// };

// 7. Server
// const express = require("express");
// const app = express();

// // This will fire our mongoose.connect statement to initialize our database connection
// require("./server/config/mongoose.config");

// app.use(express.json(), express.urlencoded({ extended: true }));

// // This is where we import the users routes function from our user.routes.js file
// const AllMyUserRoutes = require("./server/routes/user.routes");
// AllMyUserRoutes(app);

// app.listen(8000, () => console.log("The server is all fired up on port 8000"));

// 8. Activate!
// nodemon server.js

// Debug
// If it didn't work make sure the following things are done:

// Make sure your MongoDB server is running (the 'mongod' command)
// Make sure your post data matches the data that you are inserting into the database (name and age)
// Make sure that your form submits a post request to '/users'
// Make sure mongoose is actually installed
// Check the order of everything related to mongoose (require --> connect --> Schema --> Model --> route)
// Use lots of console.log statements and follow the flow of data.


//********* Mongoose Commands *********\\

// Defining a User Schema
// => Create a Schema for Users
const UserSchema = new Mongoose.Schema({
    name: { type: String },
    adgo: { type: Number }
}, { timestamps: true })
// => create a constructor function for our model and store in veriable 'User'
const User = mongoose.model('User', UserSchema);

// Finding all User
// => ... retrieve an array of all socuments in the User collection
Userf.find()
    .then(user => {
        //logic with users results
    })
    .catch(err => res.json(err));

// Finding all Users where their name is Jessica
// => ... retrieve an array of documents matching the query object criteria
User.find({ name: 'Jessica' })
    .then(usersNamedJessica => {
        // logic with userNamedJessica results
    })
    .catch(err => res.json(err));


// Finding one User by _id
// ...retrieve 1 document (the first record found) matching the query object criteria
User.findOne({ _id: '5d34d361db64c9267ed91f73' })
    .then(user => {
        // logic with single user object result
    })
    .catch(err => res.json(err));

// Create a user
// ...create a new document to store in the User collection and save it to the DB.
const bob = new User(req.body);
// req.body is an object containing all the users data.
// if we look at req.body as an object literal it would look like this
/*
 * req.body = {
 *		"name": "Bob Ross",
 *		"age": 42
 *	}
**/
bob.save()
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
// If there's an error and the record was not saved, this (err) will contain validation errors.

// Create a user (simplified)
// ...create a new document to store in the User collection and save it to the DB.
const { userData } = req.body;
User.create(userData)
    .then(newUser => {
        // logic with succesfully saved newUser object
    })
    .catch(err => res.json(err));
// If there's an error and the record was not saved, this (err) will contain validation errors.

// DELETE ALL USERS
// ...delete all documents of the User collection
User.remove()
    .then(deletedUsers => {
        // logic (if any) with successfully removed deletedUsers object
    })
    .catch(err => res.json(err));

// DELTE ONE USER
// ...delete 1 document that matches the query object criteria
User.remove({ _id: '5d34d361db64c9267ed91f73' })
    .then(deletedUser => {
        // logic (if any) with successfully removed deletedUser object
    })
    .catch(err => res.json(err));

// UPDATE ONE RECORD
// ...update 1 document that matches the query object criteria
User.updateOne({ name: 'Bob Ross' }, {
    name: 'Ross Bob',
    $push: { pets: { name: 'Sprinkles', type: 'Chubby Unicorn' } }
})
    .then(result => {
        // logic with result -- note this will be the original object by default!
    })
    .catch(err => res.json(err));

// AN ALTERNATIVE WAY TO UPDATE A RECORD
User.findOne({ name: 'Bob Ross' })
    .then(user => {
        user.name = 'Rob Boss';
        user.pets.push({ name: 'Sprinkles', type: 'Chubby Unicorn' });
        return user.save();
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));

// VALIDATE FOR UNIQUENESS BEFORE CREATING NEW DB ENTRY
User.exists({ name: req.body.name })
    .then(userExists => {
        if (userExists) {
            // Promise.reject() will activate the .catch() below.
            return Promise.reject('Error Message Goes Here');
        }
        return User.create(req.body);
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));

// MORE MONGOOSE COMMAND RESOURCES:
// https://mongoosejs.com/docs/index.html



//********* Validations *********\\

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "First name is required"],
            minlength: [6, "First name must be at least 6 characters long"]
        },
        last_name: {
            type: String,
            required: [true, "Last name is required"],
            maxlength: [20, "Last name must be at least 6 characters long"]
        },
        age: {
            type: Number,
            min: [1, "You must be at least 1 or older to register"],
            max: [150, "You must be at most 149 years old to register"]
        },
        email: { type: String, required: [true, "Email is required"] }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

// MORE VALIDATION RESOURCES:
// https://mongoosejs.com/docs/validation.html


//********* Nested Documents *********\\


// we don't have to deal with joins; instead, MongoDB has Nested Documents
// A nested document is a mongoose schema that contains a field with the value being a completely separate mongoose schema

// EXAMPLE
const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    friends: [UserSchema]
});


// MORE COMPLEX EXAMPLE

const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    bankAccounts: [BankAccountSchema]
},
    { timestamps: true }
);

const TransactionSchema = new mongoose.Schema(
    {
        amount: { type: Number, required: true },
        vender: { type: String, required: true }
    },
    { timestamps: { createdAt: true } }
)

const BankAccountSchema = new mongoose.Schema(
    {
        accountType: { type: String, required: true },
        balance: { type: Number, default: 0 },
        tranactions: [TransactionSchema]
    },
    { timestamps: true }
)