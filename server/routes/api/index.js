// This file houses all of the individual routers and exports them to be referenced elsewhere

// Require Express
const router = require("express").Router();

// Require Routes here==================

// In this file, you will create different routers.
// You can create diffently labeled routers to keep track of your functions
// or you could cram it all into one. (I would recommend the former). 

// For each router you create, you will have to require it like the example below.

// Example:
const testRoute = require("./testRouter");
// As you can see, the above example requires the file 'testRouter.js' inside of the '/api' directory.

// ====================================

// Use routes here=====================

// Now that you have required the routes into the file like the above example,
// It is time to tell your main router file to use this router
// Do so like the example below

// Example:
router.use("/test", testRoute);

// ====================================

// Export Router
module.exports = router;