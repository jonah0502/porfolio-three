import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory } from "history";

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(
  <Router history={customHistory}>
    <Route
      component={({ history }) => {
        window.appHistory = history;
        return <App />;
      }}
    />
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();