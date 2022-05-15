const { Schema, model } = require("mongoose");

const CategoryScheme = new Schema({
  category: { type: String },
  type: { type: String },
});

const CategoriesScheme = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  categories: {
    type: [CategoryScheme],
    default: [
      { category: "Зарплата", type: "income" },
      { category: "Разное", type: "expense" },
    ],
  },
});

module.exports = model("Categories", CategoriesScheme);
