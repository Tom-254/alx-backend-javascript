const sinon = require('sinon');
const utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrother = sinon.spy(console);
    const sinonStub = sinon.stub(utils, 'calculateNumber');

    sinonStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(sinonStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonStub.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    sinonStub.restore();
    bigBrother.log.restore();
  });
});
