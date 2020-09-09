// ENTER => MongoDB

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





