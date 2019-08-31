const DIGITS = require('../src/digits.enum');

describe('Constants', () => {
  it('should return digit 0 model', () => {
    expect(DIGITS.DIGIT0).toEqual([
      ['.', '_', '.'],
      ['|', '.', '|'],
      ['.', '_', '.'],
    ]);
  });
  it('should return digit 1 model', () => {
    expect(DIGITS.DIGIT1).toEqual([
      ['.', '.', '.'],
      ['.', '.', '|'],
      ['.', '.', '|'],
    ]);
  });
  it('should return digit 2 model', () => {
    expect(DIGITS.DIGIT2).toEqual([
      ['.', '_', '.'],
      ['.', '_', '|'],
      ['|', '_', '.'],
    ]);
  });
  it('should return digit 3 model', () => {
    expect(DIGITS.DIGIT3).toEqual([
      ['.', '_', '.'],
      ['.', '_', '|'],
      ['.', '_', '|'],
    ]);
  });
});
