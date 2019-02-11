// This file is a Test Model for the testController.js file to access.
// In this file, we will create a database model. Everything in here is made using MongoDB with Mongoose.js.
// If you would would like to use a different DB and/or ODM then simply modify this file to fit your desired technologies model format
// If you aren't using MongoDB with Mongoose.js, then the only important line to you is the last line.

// Create a model here ======================================

// This test model is made using MongoDB with Mongoose.js ODM
// You can read more about MongoDB at https://www.mongodb.com/what-is-mongodb
// You can read more about Mongoose.js at https://mongoosejs.com/

// Require Mongoose
const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Create new mongoose schema
const TestSchema = new Schema({
    message: {
        type: String,
        required: true
    }
});

// Creates model from the above Schema
const Test = mongoose.model("Test", TestSchema);

// ==========================================================

// The last line is of importance no matter your database or ODM, because it will export your model to be used elsewhere.
// Simply replace 'Test' in the last line with your model object to have the model accessable.

// Export the Test model
module.exports = Test;