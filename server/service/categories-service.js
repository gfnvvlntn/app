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

  async addCategory(userId, category) {
    const categories = await CategoriesModel.updateOne(
      { user: userId },
      {
        $push: {
          categories: {
            category: category.category,
            type: category.type,
          },
        },
      }
    );
    return { categories };
  }

  async deleteCategory(userId, categoryId) {
    const categories = await CategoriesModel.updateOne(
      { user: userId },
      {
        $pull: {
          categories: {
            _id: categoryId,
          },
        },
      }
    );
    return { categories };
  }
}

module.exports = new CategoriesService();
