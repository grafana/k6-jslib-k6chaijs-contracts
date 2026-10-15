// This file collects all contracts in one place 
// This makes it easy to import in the k6 script

import { doughAPIContract, doughListAPIContract } from './pizza_service/endpoints/dough.js'
import { pizzaNamesAPIContract } from './pizza_service/endpoints/names.js'
import { ingredientAPIContract, pizzaRecommendationRequestAPIContract, pizzaRecommendationAPIContract } from './pizza_service/endpoints/pizza.js'
import { ratingRequestAPIContract, ratingAPIContract, ratingListAPIContract } from './rating_service/endpoints/rating.js'
import { registerAPIcontract, registerAPIResponseContract } from './user_service/endpoints/user.js'
import { tokenAuthRequestAPIcontract, tokenAuthResponseAPIcontract } from './authentication_service/endpoints/auth_token.js'


export {
  doughAPIContract,
  doughListAPIContract,
  pizzaNamesAPIContract,
  ingredientAPIContract,
  pizzaRecommendationRequestAPIContract,
  pizzaRecommendationAPIContract,
  ratingRequestAPIContract,
  ratingAPIContract,
  ratingListAPIContract,
  registerAPIcontract,
  registerAPIResponseContract,
  tokenAuthRequestAPIcontract,
  tokenAuthResponseAPIcontract,
}
