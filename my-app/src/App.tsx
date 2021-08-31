import './App.css';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <form className="form">
      <div>
        <label>
          First Name
          <input
            // onChange={(event) => setEmail(event.target.value)}
            type="text"
            name="first name"
            className="loginInput"
            placeholder="First Name"
          ></input>
        </label>
      </div>
      <div>
        <label>
          Last Name
          <input
            // onChange={(event) => setEmail(event.target.value)}
            type="text"
            name="last name"
            className="loginInput"
            placeholder="Last Name"
          ></input>
        </label>
      </div>
      <div>
        <label>
          Username
          <input
            // onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            className="loginInput"
            placeholder="Username"
          ></input>
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            // onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            className="loginInput"
            placeholder="Password"
          ></input>
        </label>
      </div>
    </form>
  );
}

export default App;
