// This is your controller file. This file will handle the requests to your API routes

// Require database model files =================== 

// Here is were you will require all of your models from the 'index.js' file in the 'models' directory
// In the below example, we are requiring all of our models under the variable name 'db' for 'database'
// You can see it in use in the example on line 40.

// Require models
const db = require('../models');

// ================================================

// Export Controllers to be used by the router
module.exports = {
    // Create a controller here ===================

    // Create a function to handle your router request.
    // The below function will output a 'Hello World' as a console message

    // Example:
    helloWorld: (req, res) => {
        console.log('Hello World!');

        // Inside of this function, you can handle the request parameters to your server with the 'req' argument
        // This is usually for handling parameters sent from the client server, for the API server to sort out.
        // The below example simply logs out the 'req' parameters

        // Example:
        // console.log(req);

        // You may also reference your database models with the 'db' tag which we created above (line 10).
        // This allows you to handle requests that need to manipulate information in your database.
        // In the example below, we call upon the database models and access the 'Test' model,
        // then we can perform some database action with the model.
        // See the 'index.js' file inside of the 'models' directory for more information on where the 'Test' comes from


        // Example:
        // db.Test.<databaseAction>();

        // You may also send a response back to the client with the 'res' argument.
        // You must return a res.send() object in order to access the data from the client side.
        // In the example below, we are sending back a simple message that tells the client that the 'Hello World' function has been activated.
        // But, we could also send back error responses as well as database responses.

        // Example:
        return res.send({
            message: 'Hello World Function Activated!'
        });
    }, // <-------------- Make sure your functions end with a comma and NOT a semi-colon

    // ^^^^ This is done because we are exporting these functions as an object

    // ============================================
};