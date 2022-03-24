module.exports = class BudgetDto {
    balance
    expenses
    incomes

    constructor(model) {
        this.expenses = model.expenses
        this.incomes = model.incomes
        this.balance = model.balance
    }
}