import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.interceptors.request.use(
  req => {
    console.log(req);
    return req;
  },
  err => {
    console.log("error", err);
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  response => {
    console.log("THIS IS RESPONSE", response);
    return response;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);
ReactDOM.render(<App />, document.getElementById("root"));
