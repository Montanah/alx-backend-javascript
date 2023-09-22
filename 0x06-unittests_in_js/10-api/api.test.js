/* Create one suite for the index page:
Correct status code?
Correct result?
Other?
*/

const request = require('request');
const chai = require('chai');

const expect = chai.expect;

describe('Index page', () => {
  it('correct status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('correct result', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('other', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('correct status code when :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('correct status code when :id is NOT a number (=> 404)', (done) => {
    request('http://localhost:7865/cart/anything', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it('other', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('Login page', () => {
  it('correct status code', (done) => {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('correct result', (done) => {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
  it('other', (done) => {
    request.post('http://localhost:7865/login', { form: { userName: 'Betty' } }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments page', () => {
  it('correct status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('correct result', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
  it('other', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});
