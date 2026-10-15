// json schema for https://quickpizza.grafana.com/api/pizza

import { doughAPIContract } from './dough.js'

export const pizzaRecommendationRequestAPIContract = {
  type: "object",
  properties: {
    maxCaloriesPerSlice: {
      type: "integer"
    },
    mustBeVegetarian: {
      type: "boolean"
    },
    excludedIngredients: {
      type: "array",
      items: {
        type: "string"
      }
    },
    excludedTools: {
      type: "array",
      items: {
        type: "string"
      }
    },
    maxNumberOfToppings: {
      type: "integer"
    },
    minNumberOfToppings: {
      type: "integer"
    },
  },
};

export const ingredientAPIContract = {
  type: "object",
  properties: {
    ID: {
      type: "integer"
    },
    name: {
      type: "string"
    },
    caloriesPerSlice: {
      type: "integer"
    },
    vegetarian: {
      type: "boolean"
    },
  },
  required: [
    "ID",
    "name",
    "caloriesPerSlice",
    "vegetarian",
  ]
};

export const pizzaRecommendationAPIContract = {
  type: "object",
  properties: {
    pizza: {
      type: "object",
      properties: {
        id: {
          type: "integer"
        },
        name: {
          type: "string"
        },
        dough: doughAPIContract, // reusing object from another contract
        ingredients: {
          type: "array",
          items: ingredientAPIContract
        },
        tool: {
          type: "string"
        },
      },
      required: [
        "id",
        "name",
        "dough",
        "ingredients",
        "tool",
      ]
    },
    calories: {
      type: "integer"
    },
    vegetarian: {
      type: "boolean"
    },
  },
  required: [
    "pizza",
    "calories",
    "vegetarian",
  ]
};
