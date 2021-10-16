// This file collects all contracts in one place 
// This makes it easy to import in the k6 script

import { crocodileAPIContract } from './crocodile_service/endpoints/crocodile.js'
import { crocodileListAPIcontract } from './crocodile_service/endpoints/croc_list.js'
import { registerAPIcontract, registerAPIResponseContract } from './registration_service/endpoints/register.js'
import { tokenAuthRequestAPIcontract, tokenAuthResponseAPIcontract } from './authentication_service/endpoints/auth_token.js'


export {
  crocodileAPIContract,
  crocodileListAPIcontract,
  registerAPIcontract,
  registerAPIResponseContract,
  tokenAuthRequestAPIcontract,
  tokenAuthResponseAPIcontract,
}