import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthStore from "./store/authStore";
import TransactionsStore from "./store/transactionsStore";

const authStore = new AuthStore();
const transactionsStore = new TransactionsStore()

export const Context = createContext({
  authStore, transactionsStore
});

ReactDOM.render(
  <Context.Provider value={{ authStore, transactionsStore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,

  document.getElementById("root")
);
