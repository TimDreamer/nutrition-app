const mongoose = require("mongoose");
const { Schema } = mongoose;

const NutritionSchema = new Schema({
  title: {
    type: [String, "Title required!"],
    required: true,
  },
  kcals: {
    type: [Number, "Kcaks required!"],
    required: true,
  },
  carb: {
    type: [Number, "Carbs required!"],
    required: true,
  },
  protein: {
    type: [Number, "Protein required!"],
    required: true,
  },
  fat: {
    type: [Number, "Fat required!"],
    required: true,
  },
  imgUrl: {
    type: [String, "Image Url required!"],
    required: true,
  },
});

module.exports = mongoose.model("Nutrition", NutritionSchema);
