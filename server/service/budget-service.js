const BudgetModel = require("../models/budget-models");
const ApiError = require("../exceptions/api-error");

class BudgetService {
  async getIncomes(userId) {
    return BudgetModel.find({ user: userId, balance: { $gt: 0 } });
  }

  async getExpenses(userId) {
    return BudgetModel.find({ user: userId, balance: { $lt: 0 } });
  }

  async getBalance(userId) {
    const budget = await BudgetModel.find({ user: userId }).exec();
    if (!budget) {
      throw new ApiError.BadRequest(
        "Пользователя с таким счетом не существует"
      );
    }

    const balance = budget.reduce((acc, item) => acc + item.balance, 0);
    const expenses = await this.getExpenses(userId);
    const incomes = await this.getIncomes(userId);

    return { balance, expenses, incomes };
  }

  async createAction(userId, action) {
    const budget = await BudgetModel.findOne({ user: userId });
    if (!budget) {
      throw new ApiError.BadRequest(
        "Пользователя с таким счетом не существует"
      );
    }
    await BudgetModel.create({
      balance: action,
      user: userId,
    });

    const balance = await this.getBalance(userId);

    return { ...balance };
  }

  async deleteAction(actionId, userId) {
    if (!actionId) {
      throw new ApiError.BadRequest("Такой операции не существует");
    }
    await BudgetModel.deleteOne({ _id: actionId });
    const balance = await this.getBalance(userId);
    return { ...balance };
  }
}

module.exports = new BudgetService();
