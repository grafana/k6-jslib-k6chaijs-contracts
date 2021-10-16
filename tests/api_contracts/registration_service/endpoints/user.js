// json schema for ..

export const userAPIContract = {
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
