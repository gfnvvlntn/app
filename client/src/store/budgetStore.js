import {makeAutoObservable} from "mobx";
import BudgetService from "services/budgetService";
import {currency} from "../utils/currency";

export default class BudgetStore {
  budget = {
    balance: 0,
    incomes: [],
    expenses: [],
    expensesPerPeriod: {
      expensesToday: 0,
      expensesToWeek: 0,
      expensesToMonth: 0,
      expensesToYear: 0,
    },
    incomesPerPeriod: {
      incomesToday: 0,
      incomesToWeek: 0,
      incomesToMonth: 0,
      incomesToYear: 0,
    },
  };

  get balance() {
    return currency(this.budget.balance);
  }

  get incomes() {
    return this.budget.incomes.map((income) => ({
      ...income,
      balance: currency(income.balance),
    }));
  }

  get expenses() {
    return this.budget.expenses.map((expense) => ({
      ...expense,
      balance: currency(expense.balance),
    }));
  }

  get expensesPerPeriod() {
    const expensesPerPeriodList = {};
    for (let [date, value] of Object.entries(this.budget.expensesPerPeriod)) {
      expensesPerPeriodList[date] = currency(value)
    }
    return expensesPerPeriodList;
  }

  get incomesPerPeriod() {
    const incomesPerPeriodList = {};
    for (let [date, value] of Object.entries(this.budget.incomesPerPeriod)) {
      incomesPerPeriodList[date] = currency(value)
    }
    return incomesPerPeriodList;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setBudget(value) {
    this.budget = value;
  }

  async getBudget() {
    try {
      const response = await BudgetService.getBalance();
      this.setBudget(response.data);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async createAction(action) {
    try {
      const response = await BudgetService.createAction(action);
      this.setBudget(response.data);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async deleteAction(id) {
    try {
      const response = await BudgetService.deleteAction(id);
      this.setBudget(response.data);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
