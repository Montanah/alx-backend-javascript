// Testing the result of getPaymentTokenFromAPI(true)

const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return the correct object', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
