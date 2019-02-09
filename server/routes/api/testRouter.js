// This file is a router which will route all of your API requests to the appropriate controller

// Require Express Router
const router = require("express").Router();

// Require Controller Here ==================

// Here you will require your desired controller(s) to be referenced by the express router  

// Example:
const testController = require("../../controllers/testController");

// ==========================================



// Create Routes Here =======================

// Handles Requests to the route, '/hello-world'
router.route('/hello-world')
    // This handles 'GET' requests to the '/hello-world' route
    // This route will hit the 'helloWorld' function in the testController.js file
    .get(testController.helloWorld)

    // Routes must start with "/api/test" to reference this router file
    // The route above can be called using the route '/api/test/hello-world'

    // You can handle other request to the same route, in example a 'POST' request
    // by adding .post() after the .get().
    // However, you cannot handle two 'GET' requests from the same route, so to make another
    // 'GET' request, you will need to create a new route

// ==========================================

// Exports Router
module.exports = router;