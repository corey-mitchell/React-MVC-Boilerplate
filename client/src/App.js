import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Function for handling component mount
  componentWillMount() {
    // Send a 'GET' request to our test route
    fetch(`/api/test/hello-world`)
      // Parse the response into json
      .then(res => res.json())
      // Then handle the response
      .then(response => {
        // In this case, log out the message in the console
        console.log(`API server says: ${response.message}`);
      })
      // If an error occurs
      .catch(err => {
        // Log out a message to the client with the error
        console.log('Something has gone terribly wrong!' + err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
