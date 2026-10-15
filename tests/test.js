import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import { initContractPlugin } from '../build/k6chaijs-contracts.min.js';

import { Httpx } from 'https://jslib.k6.io/httpx/0.0.4/index.js';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js';

import { 
  pizzaNamesAPIContract,
  doughListAPIContract,
  pizzaRecommendationRequestAPIContract,
  pizzaRecommendationAPIContract,
  ratingRequestAPIContract,
  ratingAPIContract,
  ratingListAPIContract,
  registerAPIcontract,
  registerAPIResponseContract,
  tokenAuthResponseAPIcontract,
  tokenAuthRequestAPIcontract} from './api_contracts/contracts.js'


initContractPlugin(chai)


export let options = {
  thresholds: {
    // fail the test if any checks fail or any requests fail
    checks: [{ threshold: 'rate == 1.00', abortOnFail: true }],
    http_req_failed: [{ threshold: 'rate == 0.00', abortOnFail: true }],
  },
};

let session = new Httpx();
session.setBaseUrl('https://quickpizza.grafana.com/api');

function validateContractsPublicPizzaService(){

  describe('[Pizza service] Fetch list of pizza names', () => {
    let response = session.get('/names');

    expect(response.status, "response status").to.equal(200)
    expect(response).to.have.validJsonBody()
    expect(response.json(), "Pizza names schema").to.matchSchema(pizzaNamesAPIContract)
  })
}

function validateAuthService(){

  const USERNAME = `user_${randomString(10)}`;
  const PASSWORD = 'superPizza2021';

  describe("[User service] user registration", () => {
    let sampleUser = {
      'username': USERNAME,
      'password': PASSWORD,
    };

    expect(sampleUser, "user registration").to.matchSchema(registerAPIcontract);

    let response = session.post(`/users`, JSON.stringify(sampleUser));

    expect(response.status, "status").to.equal(201);
    expect(response).to.have.validJsonBody()
    expect(response.json(), "registration response").to.matchSchema(registerAPIResponseContract);
  });

  describe("[Auth service] user authentication", () => {
    let authData = {
      username: USERNAME,
      password: PASSWORD
    };

    expect(authData, "Auth data payload").to.matchSchema(tokenAuthRequestAPIcontract);

    let resp = session.post(`/users/token/login`, JSON.stringify(authData));

    expect(resp.status, "Auth status").to.be.within(200, 204)
    expect(resp).to.have.validJsonBody()
    expect(resp.json(), "Auth response").to.matchSchema(tokenAuthResponseAPIcontract) // did they reply with the right format?
    expect(resp.json('token'), "auth token").anonymize().to.be.a('string');

    let authToken = resp.json('token');
    // set the authorization header on the session for the subsequent requests.
    session.addHeader('Authorization', `Token ${authToken}`);


  });
}

function validateContractsPrivatePizzaService(){
  // authentication happened before these calls.

  describe('[Pizza service] Fetch doughs', () => {
    let response = session.get('/doughs');

    expect(response.status, "response status").to.equal(200)
    expect(response).to.have.validJsonBody()
    expect(response.json(), "Dough list schema").to.matchSchema(doughListAPIContract)
  })

  describe('[Pizza service] Get a pizza recommendation', () => {
    let payload = {
      maxCaloriesPerSlice: 1000,
      mustBeVegetarian: false,
      excludedIngredients: [],
      excludedTools: [],
      maxNumberOfToppings: 5,
      minNumberOfToppings: 2,
    };

    expect(payload, "Pizza request payload").to.matchSchema(pizzaRecommendationRequestAPIContract);

    let resp = session.post(`/pizza`, JSON.stringify(payload));

    expect(resp.status, "Pizza recommendation status").to.equal(200)
    expect(resp).to.have.validJsonBody()
    expect(resp.json(), "Pizza recommendation schema").to.matchSchema(pizzaRecommendationAPIContract);

    session.pizzaId = resp.json('pizza.id'); // caching pizza ID for the future.
  });
}

function validateContractsRatingService(){
  // authentication happened before these calls.

  describe('[Rating service] Rate a pizza', () => {
    let payload = {
      stars: 5,
      pizza_id: session.pizzaId,
    };

    expect(payload, "Rating payload").to.matchSchema(ratingRequestAPIContract);

    let resp = session.post(`/ratings`, JSON.stringify(payload));

    expect(resp.status, "Rating creation status").to.equal(201)
    expect(resp).to.have.validJsonBody()
    expect(resp.json(), "Rating schema").to.matchSchema(ratingAPIContract);
  });

  describe('[Rating service] Fetch ratings', () => {
    let response = session.get('/ratings');

    expect(response.status, "response status").to.equal(200)
    expect(response).to.have.validJsonBody()
    expect(response.json(), "Rating list schema").to.matchSchema(ratingListAPIContract)
  })
}

export default function testSuite() {
  validateContractsPublicPizzaService();
  validateAuthService();
  validateContractsPrivatePizzaService();
  validateContractsRatingService();
}
