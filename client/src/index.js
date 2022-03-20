import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthStore from "./store/authStore";
import BudgetStore from "./store/budgetStore";

const authStore = new AuthStore();
const budgetStore = new BudgetStore();

export const Context = createContext({
  authStore,
  budgetStore,
});

ReactDOM.render(
  <Context.Provider value={{ authStore, budgetStore }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,

  document.getElementById("root")
);
