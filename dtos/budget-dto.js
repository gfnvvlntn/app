module.exports = class BudgetDto {
    balance
    id

    constructor(model) {
        this.balance = model.balance
        this.id = model._id
    }
}