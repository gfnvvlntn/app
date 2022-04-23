import SettingsService from "../services/settingsService";
import {makeAutoObservable} from "mobx";

export default class SettingsStore {
  currency = ''

  constructor() {
    makeAutoObservable(this);
  }

  async getSettings() {
    try {
      const response = await SettingsService.getSettings();
      localStorage.setItem("settings", JSON.stringify(response.data));
      this.currency = response.data.currency
    } catch (e) {
      console.log(e);
    }
  }

  async changeCurrency(newCurrency) {
    try {
      const response = await SettingsService.changeCurrency(newCurrency)
      localStorage.setItem("settings", JSON.stringify(response.data));
      this.currency = response.data.currency
    }catch (e) {
      console.log(e)
    }
  }
}
