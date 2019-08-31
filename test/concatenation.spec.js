const { concatenation } = require('../src/printDigit');

describe('Concatenation method', () => {
  it('should return empty string on empty list', () => {
    expect(concatenation([])).toEqual('');
  });
  it('should return elements as string', () => {
    expect(concatenation(['t', 'e', 's', 't'])).toEqual('test');
  });
});
