// json schema for https://quickpizza.grafana.com/api/users

export const registerAPIcontract = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 1
    },
    password: {
      type: "string",
      minLength: 1
    },
  },
  required: [
    "username",
    "password",
  ]
};

export const registerAPIResponseContract = {
  type: "object",
  properties: {
    id: {
      type: "integer"
    },
    username: {
      type: "string"
    },
  },
  required: [
    "id",
    "username",
  ]
};
