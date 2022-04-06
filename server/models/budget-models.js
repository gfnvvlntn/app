const { Schema, model } = require("mongoose");

const BudgetSchema = new Schema({
  balance: { type: Number, required: true, default: 0 },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  creationDate: {type: Date}
});

module.exports = model("Budget", BudgetSchema);
