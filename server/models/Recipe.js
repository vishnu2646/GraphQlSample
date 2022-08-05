const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  dishName: {
    type: String,
  },
  description: {
    type: String,
  },
  prepTime: {
    type: String,
  },
  incredients: {
    type: String,
  },
  nutrient: {
    type: String,
  },
  postDate: {
    type: String,
  },
  authour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
