// json schema for https://test-api.k6.io/public/crocodiles/1/

export const registerAPIcontract = {
  type: "object",
  properties: {
    username: {
      type: "string"
    },
    first_name: {
      type: "string"
    },
    last_name: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
  },
  required: [
    "username",
    "first_name",
    "last_name",
    "email",
    "password",
  ]
};

// this is the structure the /user/register endpoint responds with on success
export const registerAPIResponseContract = {
  type: "object",
  properties: {
    username: {
      type: "string"
    },
    first_name: {
      type: "string"
    },
    last_name: {
      type: "string"
    },
    email: {
      type: "string"
    },
  },
  required: [
    "username",
    "first_name",
    "last_name",
    "email",
  ]
};
