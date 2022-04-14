import React, { createContext } from "react";
import App from "./App";
import AuthStore from "./store/authStore";
import BudgetStore from "./store/budgetStore";

const authStore = new AuthStore();
const budgetStore = new BudgetStore();

export const Context = createContext({
  authStore,
  budgetStore,
});

const Root = () => {
  return (
    <Context.Provider value={{ authStore, budgetStore }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  );
};

export default Root