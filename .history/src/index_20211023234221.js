import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Security } from "@okta/okta-react";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();
const { REACT_APP_OKTA_ORG_URL, REACT_APP_OKTA_CLIENT_ID } = process.env;

const oktaConfig = {
  issuer: `https://dev-8848564.okta.com/oauth2/default`,
  redirect_uri: `${window.location.origin}/login/callback`,
  client_id: "0oa2ad9dwfWoCmEgM5d7",
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();
