const BudgetModel = require("../models/budget-models");
const ApiError = require("../exceptions/api-error");

class BudgetService {
  perDay = new Date().setHours(0, 0, 0);
  perWeek = new Date(
    new Date().setDate(new Date().getDate() + 1 - new Date().getDay())
  ).setHours(0, 0, 0);
  perMonth = new Date(new Date().setMonth(new Date().getMonth(), 1)).setHours(
    0,
    0,
    0
  );
  perYear = new Date(new Date().getFullYear(), 0, 1);

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

    const expensesToday = await this.getExpensesPerPeriod(userId, this.perDay);
    const expensesToWeek = await this.getExpensesPerPeriod(
      userId,
      this.perWeek
    );
    const expensesToMonth = await this.getExpensesPerPeriod(
      userId,
      this.perMonth
    );
    const expensesToYear = await this.getExpensesPerPeriod(
      userId,
      this.perYear
    );

    const incomesToday = await this.getIncomesPerPeriod(userId, this.perDay);
    const incomesToWeek = await this.getIncomesPerPeriod(userId, this.perWeek);
    const incomesToMonth = await this.getIncomesPerPeriod(
      userId,
      this.perMonth
    );
    const incomesToYear = await this.getIncomesPerPeriod(userId, this.perYear);

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
      balance: action,
      user: userId,
      creationDate: Date.now(),
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
