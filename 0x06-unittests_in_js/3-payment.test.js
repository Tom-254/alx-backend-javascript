const sinon = require('sinon');
const utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of utils', () => {
    const sinonSpy = sinon.spy(utils);

    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonSpy.calculateNumber.callCount).to.be.equal(1);
    sinonSpy.calculateNumber.restore();
  });
});
