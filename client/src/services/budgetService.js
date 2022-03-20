import api from "../hooks/use-api";

export default class BudgetService {
  static async getBalance() {
    return api.get("/get-balance");
  }

  static  async createAction(action) {
    return api.post("/create-action", {action})
  }

  static async deleteAction(actionId) {
    return api.post("/delete-action", {actionId})
  }
}
