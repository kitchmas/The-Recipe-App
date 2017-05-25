const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
  ingredient:String
});

const RecipeShcema = new Schema({
  name:String,
  method:String,
  ingredients:[IngredientsSchema]
});

const Recipe = mongoose.model('recipe',RecipeShcema);

module.exports = Recipe;
