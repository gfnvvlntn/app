import CategoriesService from "../services/categoriesService";
import { makeAutoObservable } from "mobx";

export default class CategoriesStore {
  _categoriesExpense = [];
  _categoriesIncome = [];

  constructor() {
    makeAutoObservable(this);
  }

  get categoriesExpense() {
    return this._categoriesExpense;
  }

  get categoriesIncome() {
    return this._categoriesIncome;
  }

  sortCategories(value) {
    this._categoriesExpense = value.filter(
      (category) => category.type === "expense"
    );
    this._categoriesIncome = value.filter(
      (category) => category.type === "income"
    );
  }

  get optionCategoriesExpense() {
    return (
      this._categoriesExpense.map((option) => {
        return {
          id: option._id,
          label: option.category,
          value: option.category,
        };
      }) || [{ id: 1, label: "", value: "" }]
    );
  }

  get optionCategoriesIncome() {
    return (
      this._categoriesIncome.map((option) => {
        return {
          id: option._id,
          label: option.category,
          value: option.category,
        };
      }) || [{ id: 1, label: "", value: "" }]
    );
  }

  async getCategories() {
    try {
      const response = await CategoriesService.getCategories();
      this.sortCategories(response?.data?.categories);
    } catch (e) {
      console.log(e);
    }
  }

  async addCategory(category) {
    try {
      const response = await CategoriesService.addCategory(category);
      this.sortCategories(response?.data?.categories);
    } catch (e) {
      console.log(e);
    }
  }
}
