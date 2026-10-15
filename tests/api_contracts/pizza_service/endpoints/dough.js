// json schema for https://quickpizza.grafana.com/api/doughs

export const doughAPIContract = {
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
  },
  required: [
    "ID",
    "name",
    "caloriesPerSlice",
  ]
};

export const doughListAPIContract = {
  type: "object",
  properties: {
    doughs: {
      type: "array",
      items: doughAPIContract // reusing object from another contract
    },
  },
  required: [
    "doughs",
  ]
};
