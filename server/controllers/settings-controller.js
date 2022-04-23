const ApiError = require("../exceptions/api-error");
const settingsService = require("../service/settings-service");

class SettingsController {
  async getSettings(req, res, next) {
    try {
      const user = req.user;
      if (!user.id) {
        return next(ApiError.UnAuthorizedError());
      }

      const settingsData = await settingsService.getSettings(user.id);

      return res.json(settingsData);
    } catch (e) {
      next(e);
    }
  }
  
  async changeCurrency(req, res, next) {
    try {
      const user = req.user;
      if (!user.id) {
        return next(ApiError.UnAuthorizedError());
      }
      const { newCurrency } = req.body;

      if (!newCurrency) {
        return  next(ApiError.BadRequest('Не корректное значение валюты'))
      }

      const currencyData = await settingsService.changeCurrency(user.id, newCurrency)

      return res.json(currencyData)
      
    }catch (e) {
      next(e)
    }
  }
}

module.exports = new SettingsController();