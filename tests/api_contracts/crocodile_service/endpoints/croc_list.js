// json schema for https://test-api.k6.io/public/crocodiles/

import { crocodileAPIContract } from './crocodile.js'

export const crocodileListAPIcontract = {
  "items": crocodileAPIContract // reusing object from another contract
};

