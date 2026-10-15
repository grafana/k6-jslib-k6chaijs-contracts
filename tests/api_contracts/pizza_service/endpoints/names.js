// json schema for https://quickpizza.grafana.com/api/names

export const pizzaNamesAPIContract = {
  type: "object",
  properties: {
    names: {
      type: "array",
      items: {
        type: "string"
      },
      minItems: 1
    },
  },
  required: [
    "names",
  ]
};
