// Test case for 1-calcul.js function
// You can assume a and b are always number
// Usage of describe will help you to organize your test cases
// Rewrite the test suite, using expect from Chai

const calculateNumber = require('./1-calcul.js');
const expect = require('chai').expect;

describe('calculateNumber', () => {
  it('should return 5 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return -2 when subtracting 1 from 3', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
  it('should return Error when dividing by 0', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
