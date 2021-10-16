// json schema for https://test-api.k6.io/public/crocodiles/1/

export const crocodileAPIContract = {
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000
    },
    "date_of_birth": {
      "type": "string",
      "format": "date"
    }
  },
  "required": [
    "id",
    "name",
    "age",
    "date_of_birth"
  ]
};
