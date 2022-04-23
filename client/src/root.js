import React, { createContext } from "react";
import App from "./App";
import AuthStore from "./store/authStore";
import BudgetStore from "./store/budgetStore";
import SettingsStore from "./store/settingsStore";

const authStore = new AuthStore();
const budgetStore = new BudgetStore();
const settingsStore = new SettingsStore()

export const Context = createContext({
  authStore,
  budgetStore,
  settingsStore
});

const Root = () => {
  return (
    <Context.Provider value={{ authStore, budgetStore, settingsStore }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  );
};

export default Root