# React-MVC-Boilerplate
A MVC (Model Views Controller) Boilerplate that uses React.js.

## About This Boilerplate

This was made for myself to use because I like the file structure. Anyone else is free to use it as they see fit. ^__^ Enjoy!

## The API
This application is utilizing a MVC architectural pattern. You can view the flowchart below for details on how to create a route as well as understand how the files relate.

![API Flowchart](https://user-images.githubusercontent.com/37916145/49304655-a2e32d80-f492-11e8-8bdf-65da03549070.PNG)

## Technologies Used
This is designed to be a MERN ([MongoDB](https://www.mongodb.com/what-is-mongodb), [Express.js](https://expressjs.com/), [React.js](https://reactjs.org/) and [Node.js](https://nodejs.org/en/)) stack application by example. However, it can easily be converted to a SERN stack by using [MySQL](https://www.mysql.com/) and [Sequlize.js](http://docs.sequelizejs.com/).

The '[/client](./client)' was created using [create-react-app](https://github.com/facebook/create-react-app#creating-an-app) 

The MERN example utilizes [mongoose.js](https://mongoosejs.com/) ODM.

## Running Locally

### Prerequisites:

Must have Node.js installed to run. If you need to install Node.js, please refer to their website [here](https://nodejs.org/en/).

I utilize Yarn as my package manager rather than Node's standard npm. So I will be using yarn commands. But you can easily replace any instance of 'yarn' with 'npm' in your command line.

### Running

1. Download the Boilerplate by running the below command in your terminal:

    ```
    git clone git@github.com:corey-mitchell/React-MVC-Boilerplate.git
    ```

2. CD into the application's root directory

    ```
    cd Reat-MVC-Boilerplate
    ```

3. Once inside of the application's root directory, install the API server's depencencies. To do so, run:

    ```
    yarn install
    ```

4. After you API's dependencies are installed, it's time to install your Client server's dependencies. To do so, cd into the client folder and run yarn install again. Like so:

    ```
    cd client

    yarn install
    ```
    * *Note* - This is done twice because our Client Server and API Server are running on two different ports and have different dependencies. This is to make sure that all dependencies for both servers are installed.

5. Now that all dependencies are installed, its time to head back into the root directory and start it up.

    ```
    cd ..

    yarn start
    ```

# Author

[Corey Mitchell](https://github.com/corey-mitchell)
