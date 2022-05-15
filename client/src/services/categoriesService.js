import api from "../hooks/use-api";

export default class CategoriesService {
  static async getCategories() {
    return api.get("/get-categories");
  }

  static async addCategory(category) {
    return api.post("/add-category", { category });
  }
}
