const BudgetModel = require("../models/budget-models");
const ApiError = require("../exceptions/api-error");
const PerDate = require("../utils/perDate");

class BudgetService {
  async getIncomes(userId) {
    return BudgetModel.find({ user: userId, balance: { $gt: 0 } });
  }

  async getIncomesPerPeriod(userId, perPeriod) {
    const incomesPerPeriod = await BudgetModel.find({
      user: userId,
      balance: { $gt: 0 },
      creationDate: {
        $gte: perPeriod,
      },
    });
    return incomesPerPeriod.reduce((acc, item) => acc + item.balance, 0);
  }

  async getExpenses(userId) {
    return BudgetModel.find({ user: userId, balance: { $lt: 0 } });
  }

  async getExpensesPerPeriod(userId, perPeriod) {
    const expensesPerPeriod = await BudgetModel.find({
      user: userId,
      balance: { $lt: 0 },
      creationDate: { $gte: perPeriod },
    });
    return expensesPerPeriod.reduce((acc, item) => acc + item.balance, 0);
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

    const expensesToday = await this.getExpensesPerPeriod(
      userId,
      PerDate.perDay
    );
    const expensesToWeek = await this.getExpensesPerPeriod(
      userId,
      PerDate.perWeek
    );
    const expensesToMonth = await this.getExpensesPerPeriod(
      userId,
      PerDate.perMonth
    );
    const expensesToYear = await this.getExpensesPerPeriod(
      userId,
      PerDate.perYear
    );

    const incomesToday = await this.getIncomesPerPeriod(userId, PerDate.perDay);
    const incomesToWeek = await this.getIncomesPerPeriod(
      userId,
      PerDate.perWeek
    );
    const incomesToMonth = await this.getIncomesPerPeriod(
      userId,
      PerDate.perMonth
    );
    const incomesToYear = await this.getIncomesPerPeriod(
      userId,
      PerDate.perYear
    );

    return {
      balance,
      expenses,
      incomes,
      expensesPerPeriod: {
        expensesToday,
        expensesToWeek,
        expensesToMonth,
        expensesToYear,
      },
      incomesPerPeriod: {
        incomesToday,
        incomesToWeek,
        incomesToMonth,
        incomesToYear,
      },
    };
  }

  async createAction(userId, action) {
    const budget = await BudgetModel.findOne({ user: userId });
    if (!budget) {
      throw new ApiError.BadRequest(
        "Пользователя с таким счетом не существует"
      );
    }
    await BudgetModel.create({
      balance: action.action,
      user: userId,
      creationDate: action.creationDate,
      category: action.category,
      comment: action.comment,
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
