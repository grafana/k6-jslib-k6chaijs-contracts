// json schema for https://quickpizza.grafana.com/api/users/token/login

export const tokenAuthRequestAPIcontract = {
  type: "object",
  properties: {
    username: {
      type: "string"
    },
    password: {
      type: "string"
    },
  },
  required: [
    "username",
    "password",
  ]
};

export const tokenAuthResponseAPIcontract = {
  type: "object",
  properties: {
    token: {
      type: "string"
    },
  },
  required: [
    "token",
  ]
};
