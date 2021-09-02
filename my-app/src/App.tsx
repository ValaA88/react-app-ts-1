import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Dispatch } from 'redux';
import icon from '../src/img/header-logo.png';
import hide from '../src/img/icon_hide_password.png';
import back from '../src/img/login_bg.png';
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
import { setUserId } from './utils/cookies/userCookies';

// email,
// password,
// deviceName

// console.log()

// const loginUser = () => {
//   // Here implement fetch to login
//   console.log('Works');
//   // Here log response from server
// };

// async (dispatch: Dispatch<authDispatchTypes>) => {
//   try {
//     const fullUrl = `${environment.baseUrl}admin/auth/tokens`;
//     await axios
//       .post(fullUrl, {
//         email,
//         password,
//         deviceName,
//       })
//       .then(function (response) {
//         setToken(response.data.token.token);
//         const id = response.data.token.userId;
//         setUserId(id);
//       });
//     dispatch({
//       type: LOGIN_SUCCESS,
//     });
//   } catch (e: any) {
//     dispatch({
//       type: AUTH_ERROR,
//       payload: 'login',
//     });
//   }

function App() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const loginUser = (e: any) => {
    e.preventDefault();

    // If Valid show console log

    // If Not valid show error under input
    console.log(credentials);
  };

  return (
    <div>
      <div>
        <img src={icon} alt="icon" className="imageIcon"></img>
      </div>
      <div>
        <p className="headTitle ">Bitte loggen Sie sich ein um fortzufahren.</p>
        <img src={back} alt="backgroundLogin" className="image"></img>
      </div>

      <form className="form" onSubmit={(e: any) => loginUser(e)}>
        <div>
          <label>
            <div className="text">Email</div>
            <input
              value={credentials.email}
              onChange={(event) =>
                setCredentials({ ...credentials, email: event.target.value })
              }
              type="text"
              name="email"
              className="loginInput"
              placeholder="Email"
            ></input>
          </label>
        </div>
        <div>
          <label>
            <div className="text">Password</div>

            <input
              value={credentials.password}
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
              type="password"
              name="password"
              className="loginInput"
              placeholder="Password"
            ></input>
            <img src={hide} alt="icon" className="hideImage"></img>
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </div>
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
