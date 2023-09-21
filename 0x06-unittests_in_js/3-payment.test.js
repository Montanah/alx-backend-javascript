const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyConsole.restore();
  });
  it('should log correct output when called with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
  it('should log correct output when called with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });
  it('should call the calculateNumber function', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    sendPaymentRequestToApi(10, 10);
    expect(stubUtils.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    stubUtils.restore();
  });
});


