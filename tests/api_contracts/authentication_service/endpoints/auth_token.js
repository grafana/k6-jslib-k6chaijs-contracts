// json schema for https://test-api.k6.io/auth/token/login/

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
    access: {
      type: "string"
    },
    refresh: {
      type: "string"
    },
  },
  required: [
    "access",
    "refresh",
  ]
};
