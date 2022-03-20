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

  async createAction(req, res, next) {
    try {
      const { action } = req.body;

      if (!action) {
        return next(ApiError.BadRequest("Введите корректные данные"));
      }

      const user = req.user;

      if (!user.id) {
        return next(ApiError.UnAuthorizedError());
      }

      const balanceData = await budgetService.createAction(user.id, action);

      return res.json(balanceData);
    } catch (e) {
      next(e);
    }
  }
  async deleteAction(req, res, next) {
    try {
      const { actionId } = req.body;

      const user = req.user;

      if (!user.id) {
        return next(ApiError.UnAuthorizedError());
      }

      if (!actionId) {
        return next(ApiError.BadRequest("Неправильно передан елемент"));
      }

      const balanceData = await budgetService.deleteAction(actionId, user.id);

      return res.json(balanceData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BudgetController();
