// Require Dependencies
const express = require("express");
const routes = require("./server/routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Import DB
// Example using MongoDB and Mongoose.js ODM Below
// Info about MongoDB can be found at https://www.mongodb.com/what-is-mongodb
// Info about Mongoose.js can be found at https://mongoosejs.com/
// const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'page.tsx'));
  });
};

// Add routes, both API and view
app.use(routes);

// Insert DB Info here =============================

// Example using MongoDB
// // If deployed, use the deployed database. Otherwise use the local database
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/<Your Database Name>";

// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);

// ================================================

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API server running on PORT ${PORT}!`);
});