import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppStore } from "./store/store";
import CustomNotification from "./Notification/notification";

ReactDOM.render(
  <Provider store={AppStore}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(
  <Provider store={AppStore}>
    <CustomNotification />
  </Provider>,
  document.getElementById("notification")
);
