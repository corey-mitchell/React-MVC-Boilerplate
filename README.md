# React-MVC-Boilerplate

A MVC (Model Views Controller) Boilerplate that uses React.js.

## About This Boilerplate

This is a MERN stack application which utilizes a MVC (Model Views Controller) architectural pattern. It is designed for the Client Server and API Server to run on two separate ports simultaneously. The boilerplate mostly focuses on the API Server file structure, while the Client Server was created utilizing [Next.js](https://nextjs.org).

The application opens up a standard looking [Next.js](https://nextjs.org) landing page.

![Next JS default landing page](https://github.com/user-attachments/assets/cfca37c5-fee9-4f5c-8d6e-655c10950e55)

If you look inside of your application's terminal, you should see a 'Hello World!' output.

![hello world terminal output](https://user-images.githubusercontent.com/37916145/52542775-d7177c00-2d68-11e9-8018-2a7f3ab78e21.PNG)

If you open your console in Chrome's Dev Tools, you should also see a message from the API server. This is to show that the client has received back information from the API.

![Next JS default landing page with message](https://github.com/user-attachments/assets/2493ac3c-46e9-4853-9a92-bad7d41bcc0f)

This was made for myself to use because I like the file structure. Anyone else is free to use it at their own risk. I do NOT claim any rights to any technologies used. Including, but not limited to: [MongoDB](https://www.mongodb.com/what-is-mongodb), [mongoose.js](https://mongoosejs.com/) ODM, [Express.js](https://expressjs.com/), [React.js](https://reactjs.org/), [Next.js](https://nextjs.org) or [Node.js](https://nodejs.org/en/).

## The API

This application is utilizing a MVC architectural pattern. You can view the flowchart below for details on how to create a route as well as understand how the files relate.

![API Flowchart](https://user-images.githubusercontent.com/37916145/49304655-a2e32d80-f492-11e8-8bdf-65da03549070.PNG)

## Technologies Used

This is designed to be a MERN ([MongoDB](https://www.mongodb.com/what-is-mongodb), [Express.js](https://expressjs.com/), [React.js](https://reactjs.org/) and [Node.js](https://nodejs.org/en/)) stack application by example. However, it can easily be converted to a SERN stack by using [MySQL](https://www.mysql.com/) and [Sequlize.js](http://docs.sequelizejs.com/).

The '[/client](./client)' was created using [Next.js](https://nextjs.org).

The MERN example utilizes [mongoose.js](https://mongoosejs.com/) ODM.

The API server utilizes [Nodemon](https://nodemon.io/), a utility that will monitor for any changes in the source and automatically restart the API server.

The Client and API servers are ran simultaneously using [concurrently npm](https://www.npmjs.com/package/concurrently).

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
    cd React-MVC-Boilerplate
    ```

3. Once inside of the application's root directory, install the API server's depencencies. To do so, run:

    ```
    npm install
    ```

4. After your API's dependencies are installed, it's time to install your Client server's dependencies. To do so, cd into the client folder and run npm install again. Like so:

    ```
    cd client

    npm install
    ```
    * *Note* - This is done twice because our Client Server and API Server are running on two different ports and have different dependencies. This is to make sure that all dependencies for both servers are installed.

5. Now that all dependencies are installed, its time to head back into the root directory and start it up.

    ```
    cd ..

    npm start
    ```

    * *Note* - Once you have started the application, there is no need to open it within the browser. The application will automatically start the API server, then start the React Development server. Once the React Development server has compiled, the application will open automatically in the broswer.

# Author

[Corey Mitchell](https://github.com/corey-mitchell)
