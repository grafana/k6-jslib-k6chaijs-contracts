import http from 'k6/http';
import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import { initContractPlugin } from '../build/k6chaijs-contract.min.js';

import { crocodileListAPIcontract } from './api_contracts/contracts.js'

export let options = {
  thresholds: {
    checks: [{ threshold: 'rate == 1.00', abortOnFail: true }],
    http_req_failed: [{ threshold: 'rate == 0.00', abortOnFail: true }],
  },
};


initContractPlugin(chai)


export default function testSuite() {

  describe('[Crocs service] Fetch list of crocs', () => {
    let response = http.get('https://test-api.k6.io/public/crocodiles');

    expect(response.status, "response status").to.equal(200)
    expect(response).to.have.validJsonBody()
    expect(response.json(), "Croc List schema").to.matchSchema(crocodileListAPIcontract)
  })

}
