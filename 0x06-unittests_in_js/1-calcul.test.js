// Test case for 1-calcul.js function
// You can assume a and b are always number
// Usage of describe will help you to organize your test cases

const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
  it('should return 5 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return -2 when subtracting 1 from 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('should return Error when dividing by 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
