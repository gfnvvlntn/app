import api from "../hooks/use-api";

export default class SettingsService {

  static async getSettings() {
    return api.get("/get-settings");
  }

  static  async changeCurrency(newCurrency) {
    return api.post("/change-currency", {newCurrency})
  }
}