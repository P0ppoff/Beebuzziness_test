const { zip } = require('../src/printDigit');

describe('zip method', () => {
  it('should return empty list on two empty list', () => {
    expect(zip([], [])).toEqual([]);
  });
  it('should zip array with one elements', () => {
    expect(zip([1], [2])).toEqual([[1, 2]]);
  });
  it('should zip array with length of first item', () => {
    expect(zip([1], [2, 3])).toEqual([[1, 2]]);
  });
  it('should zip array with length of first item', () => {
    expect(zip([1, 3], [2])).toEqual([[1, 2], [3, undefined]]);
  });
});
