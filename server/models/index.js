// This file accesses all of your database models and exports them to the controllers

// Exporting an object containing all models
module.exports = {

    // Inside of this object, you will require each of your database models as their own unique names.
    // The key name that you export the model as will be the name you will refer to it as from the controllers.
    // So, the below example exports the 'Test.js' model to the controllers to be accessed as 'Test'.

    // Check the testController.js file to see how the controller calls upon the model (line 10 and line 40).
    // Also, reference 'The API' section of the README.md file. This section contains a flow chart to help
    // users understand how the files relate to one another.

    // Example:
    Test: require('./Test'),
};