import { makeAutoObservable } from "mobx";
import AuthService from "../services/authService";
import axios from "axios";
import { BASE_URL } from "../hooks/use-api";

export default class AuthStore {
  user = JSON.parse(localStorage.getItem("user")) || {};
  isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  message = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(auth) {
    this.isAuth = auth;
  }

  setUser(user) {
    this.user = user;
  }

  setMessage(message) {
    this.message = message;
    setTimeout(() => {
      this.message = "";
    }, 3000);
  }

  saveUser(response) {
    localStorage.setItem("token", response.data.accessToken);
    localStorage.setItem("isAuth", JSON.stringify(true));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    this.setAuth(true);
    this.setUser(response.data.user);
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      this.saveUser(response);
    } catch (e) {
      this.setMessage(e.response?.data?.message);
    }
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      this.saveUser(response);
    } catch (e) {
      this.setMessage(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      localStorage.setItem("isAuth", JSON.stringify(false));
      localStorage.setItem("user", JSON.stringify({}));
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
