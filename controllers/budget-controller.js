const budgetService = require("../service/budget-service");
const ApiError = require("../exceptions/api-error");

class BudgetController {
  async getBalance(req, res, next) {
    try {
      const user = req.user;
      if (!user.id) {
        return next(ApiError.BadRequest("Нет параметров"));
      }

      const balanceData = await budgetService.getBalance(user.id);

      return res.json(balanceData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BudgetController();
