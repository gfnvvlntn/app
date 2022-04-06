import { makeAutoObservable } from "mobx";
import BudgetService from "services/budgetService";

export default class BudgetStore {
  balance = 0;
  incomes = [];
  expenses = [];
  expensesToday = 0

  constructor() {
    makeAutoObservable(this);
  }
  setBalance(value) {
    this.balance = value;
  }

  setIncomes(value) {
    this.incomes = value;
  }

  setExpenses(value) {
    this.expenses = value;
  }

  setExpensesToday(value) {
    this.expensesToday = value
  }

  async getBalance() {
    try {
      const response = await BudgetService.getBalance();
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes);
      this.setExpenses(response.data.expenses);
      this.setExpensesToday(response.data.expensesToday)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async createAction(action) {
    try {
      const response = await BudgetService.createAction(action);
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes);
      this.setExpenses(response.data.expenses);
      this.setExpensesToday(response.data.expensesToday)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async deleteAction(id) {
    try {
      const response = await BudgetService.deleteAction(id);
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes);
      this.setExpenses(response.data.expenses);
      this.setExpensesToday(response.data.expensesToday)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
