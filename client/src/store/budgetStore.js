import { makeAutoObservable } from "mobx";
import BudgetService from "services/budgetService";

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
