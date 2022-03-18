import { makeAutoObservable } from "mobx";
import TransactionsService from "../services/transactionsService";

export default class TransactionsStore {
  action = 0;
  balance = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setBalance(value) {
    this.balance = value;
  }

  async getBalance() {
    try {
      const response = await TransactionsService.getBalance();
      this.setBalance(response.data.budget.balance);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
