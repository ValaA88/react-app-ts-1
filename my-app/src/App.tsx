import './App.css';
import axios from 'axios';
import React from 'react';
import { Dispatch } from 'redux';
import {
  AUTH_ERROR,
  authDispatchTypes,
  CHANGE_PASSWORD,
  CLEAR_AUTH_MESSAGES,
  LOGIN_SUCCESS,
  LOGOUT,
  RESET_PASSWORD,
  USER_TOKEN,
} from '../src/types/authTypes';
import { removeToken, setToken } from '../src/utils/cookies/tokensCookie';
import environment from './environment';

// email,
// password,
// deviceName

// console.log()

// const loginUser = () => {
//   // Here implement fetch to login
//   console.log('Works');
//   // Here log response from server
// };

export const loginUser =
  (email: string, password: string) =>
  async (dispatch: Dispatch<authDispatchTypes>) => {
    try {
      const fullUrl = `${environment.baseUrl}admin/auth/tokens`;
      await axios
        .post(fullUrl, {
          email,
          password,
          deviceName,
        })
        .then(function (response) {
          setToken(response.data.token.token);
          const id = response.data.token.userId;
          setUserId(id);
        });
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } catch (e: any) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'login',
      });
    }
  };

function App() {
  return (
    <form className="form" onSubmit={loginUser}>
      <div>
        <label>
          Email
          <input
            // onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="email"
            className="loginInput"
            placeholder="Email"
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
      <div>
        <button className="button">
          <a href="/login">Login</a>
        </button>
      </div>
      <div>
        <img
          src="backgroundLogin.png"
          key="backgroundLogin"
          alt="backgroundLogin"
          className="image"
        ></img>
      </div>
    </form>
  );
}

// Get user token
export const userTokenDispatcher = (token: string) => (dispatch: Dispatch) => {
  dispatch({
    type: USER_TOKEN,
    payload: token,
  });
};

export default App;
