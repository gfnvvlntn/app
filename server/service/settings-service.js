const SettingsModel = require("../models/settinsgs-model");

class SettingsService {
  async getSettings(userId) {
    return SettingsModel.findOne({ user: userId });
  }

  async changeCurrency(userId, newCurrency) {
    await SettingsModel.updateOne(
      { user: userId },
      { $set: { currency: newCurrency } }
    );
    return this.getSettings(userId)
  }
}

module.exports = new SettingsService();
