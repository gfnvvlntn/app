const CategoriesModel = require("../models/categories-models");
const ApiError = require("../exceptions/api-error");

class CategoriesService {
  async getCategories(userId) {
    const categories = await CategoriesModel.findOne({ user: userId });
    if (!categories) {
      throw new ApiError.BadRequest(
        "Пользователя с таким счетом не существует"
      );
    }
    return { categories };
  }
}

module.exports = new CategoriesService();
