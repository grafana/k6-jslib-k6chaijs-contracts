// json schema for https://quickpizza.grafana.com/api/ratings

export const ratingRequestAPIContract = {
  type: "object",
  properties: {
    stars: {
      type: "integer",
      minimum: 1,
      maximum: 5
    },
    pizza_id: {
      type: "integer"
    },
  },
  required: [
    "stars",
    "pizza_id",
  ]
};

export const ratingAPIContract = {
  type: "object",
  properties: {
    id: {
      type: "integer"
    },
    stars: {
      type: "integer",
      minimum: 1,
      maximum: 5
    },
    pizza_id: {
      type: "integer"
    },
  },
  required: [
    "id",
    "stars",
    "pizza_id",
  ]
};

export const ratingListAPIContract = {
  type: "object",
  properties: {
    ratings: {
      type: "array",
      items: ratingAPIContract // reusing object from another contract
    },
  },
  required: [
    "ratings",
  ]
};
