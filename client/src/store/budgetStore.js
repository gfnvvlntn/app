import { makeAutoObservable } from "mobx";
import BudgetService from "../services/budgetService";

export default class BudgetStore {
  balance = 0;
  incomes = []
  expenses = []

  constructor() {
    makeAutoObservable(this);
  }
  setBalance(value) {
    this.balance = value;
  }

  setIncomes(value) {
    this.incomes = value
  }

  setExpenses(value) {
    this.expenses = value
  }

  async getBalance() {
    try {
      const response = await BudgetService.getBalance();
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes)
      this.setExpenses(response.data.expenses)
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async createAction(action) {
    try {
      const response = await BudgetService.createAction(action)
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes)
      this.setExpenses(response.data.expenses)
    }catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async deleteAction(id) {
    try {
      const response = await BudgetService.deleteAction(id)
      this.setBalance(response.data.balance);
      this.setIncomes(response.data.incomes)
      this.setExpenses(response.data.expenses)
    }catch (e) {
      console.log(e.response?.data?.message);
    }
  }

}
