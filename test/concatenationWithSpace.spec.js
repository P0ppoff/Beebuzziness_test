const { concatWithSpace } = require('../src/printDigit');

describe('Concatenation with space at the end method', () => {
  it('should return space string on empty list', () => {
    expect(concatWithSpace([])).toEqual(' ');
  });
  it('should return elements as string', () => {
    expect(concatWithSpace(['t', 'e', 's', 't'])).toEqual('test ');
  });
});
