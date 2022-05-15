import api from "../hooks/use-api";

export default class CategoriesService {
  static async getCategories() {
    return api.get("get-categories");
  }
}