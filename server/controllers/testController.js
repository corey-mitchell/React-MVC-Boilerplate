// This is your controller file. This file will handle the requests to your API routes

// Require models
const db = require('../models');

// Export Controllers to be used by the router
module.exports = {
    // Create a controller here =============

    // Create a function to handle your router request.
    // The below function will output a 'Hello World' as a console message



    // Example:
    helloWorld: (req, res) => {
        console.log('Hello World!');

        // Inside of this function, you can handle the requests to your server with the 'req' argument
        // You may also reference your database models with the 'db' tag.
        // This allows you to handle request that need information from your database

        // You may also send a response back to the client with the 'res' argument.
        // You must return a res.send() object because this in order to access the data from the client, it must be
        // passed as a callback function.

        // Example:
        return res.send({
            message: 'Hello World Function Activated!'
        });
    },

    // Make sure your functions end with a comma and NOT a semi-colon

    // ======================================
};