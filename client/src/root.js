import React, { createContext, useEffect } from "react";
import App from "./App";
import AuthStore from "./store/authStore";
import BudgetStore from "./store/budgetStore";
import SettingsStore from "./store/settingsStore";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import CategoriesStore from "./store/categoriesStore";

const authStore = new AuthStore();
const budgetStore = new BudgetStore();
const settingsStore = new SettingsStore();
const categoriesStore = new CategoriesStore();

export const Context = createContext({
  authStore,
  budgetStore,
  settingsStore,
  categoriesStore,
});

const Root = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.checkAuth();
    }
  }, []);

  useEffect(() => {
    if (authStore.isAuth) {
      budgetStore.getBudget();
    }
  }, [authStore.isAuth]);

  useEffect(() => {
    if (authStore.isAuth) {
      settingsStore.getSettings();
    }
  }, []);

  useEffect(() => {
    if (authStore.isAuth) {
      categoriesStore.getCategories();
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{ authStore, budgetStore, settingsStore, categoriesStore }}
        >
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
