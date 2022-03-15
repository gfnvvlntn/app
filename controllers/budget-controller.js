const budgetService = require("../service/budget-service");
const ApiError = require("../exceptions/api-error");

class BudgetController {
  async getBalance(req, res, next) {
    try {
      const { id } = req.body;
      if (!id) {
        return next(ApiError.BadRequest("Нет параметров"));
      }

      const balanceData = await budgetService.getBalance(id);

      return res.json(balanceData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BudgetController();
