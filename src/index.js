import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { SignupPage } from "./SignupPage/SignupPage";

const theme = createMuiTheme({ typography: { useNextVariants: true } });


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App/>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//create new js file
//implement class
//here load our file instea of App
//material ui form