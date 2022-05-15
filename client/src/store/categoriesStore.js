import CategoriesService from "../services/categoriesService";
import { makeAutoObservable } from "mobx";

export default class CategoriesStore {
  categoriesExpense = [];
  categoriesIncome = [];

  constructor() {
    makeAutoObservable(this);
  }

  sortCategories(value) {
    this.categoriesExpense = value.filter(
      (category) => category.type === "expense"
    );
    this.categoriesIncome = value.filter(
      (category) => category.type === "income"
    );
  }

  get optionCategoriesExpense() {
    return this.categoriesExpense.map((option) => {
      return {
        id: option._id,
        label: option.category,
        value: option.category,
      };
    });
  }

  get optionCategoriesIncome() {
    return this.categoriesIncome.map((option) => {
      return {
        id: option._id,
        label: option.category,
        value: option.category,
      };
    });
  }

  async getCategories() {
    try {
      const response = await CategoriesService.getCategories();
      this.sortCategories(response?.data?.categories);
    } catch (e) {
      console.log(e);
    }
  }
}
