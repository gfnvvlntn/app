const BudgetModel = require("../models/budget-models");
const ApiError = require("../exceptions/api-error");
const BudgetDto = require("../dtos/budget-dto");

class BudgetService {
  async getBalance(id) {
    const budget = await BudgetModel.findOne({ user: id });
    if (!budget) {
      throw new ApiError.BadRequest(
        "Пользователя с таким счетом не существует"
      );
    }
    const budgetDto = new BudgetDto(budget);
    return { budget: budgetDto };
  }
}

module.exports = new BudgetService();
