import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthStore from "./store/authStore";

const authStore = new AuthStore();

export const Context = createContext({
  authStore,
});

ReactDOM.render(
  <Context.Provider value={{ authStore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,

  document.getElementById("root")
);
