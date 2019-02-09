// This file references all of your different routers into one router to be used by our controllers

// Require Dependencies
const path = require("path");
const router = require("express").Router();

// Require your router directory here ================

// You need to require all of the routers that are being exported from each file here
// The below example is for all of your API routes. Since we are using React, 
// there is little need for an '/html' file so for the most part, you can just leave this file be
// and move on to the api directory.

// Example:
const apiRoutes = require("./api");

// ===================================================


// Tell the express router to use your routes here====


// Example:
router.use("/api", apiRoutes);
// Your API has now picked up '/api' as a reference to the file
// For more information about how this api is set up, please reference README.md

// ===================================================

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

// Exports Router
module.exports = router;