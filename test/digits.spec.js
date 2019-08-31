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
  it('should return digit 4 model', () => {
    expect(DIGITS.DIGIT4).toEqual([
      ['.', '.', '.'],
      ['|', '_', '|'],
      ['.', '.', '|'],
    ]);
  });
  it('should return digit 5 model', () => {
    expect(DIGITS.DIGIT5).toEqual([
      ['.', '_', '.'],
      ['|', '_', '.'],
      ['.', '_', '|'],
    ]);
  });
  it('should return digit 6 model', () => {
    expect(DIGITS.DIGIT6).toEqual([
      ['.', '_', '.'],
      ['|', '_', '.'],
      ['|', '_', '|'],
    ]);
  });
  it('should return digit 7 model', () => {
    expect(DIGITS.DIGIT7).toEqual([
      ['.', '_', '.'],
      ['.', '.', '|'],
      ['.', '.', '|'],
    ]);
  });
  it('should return digit 8 model', () => {
    expect(DIGITS.DIGIT8).toEqual([
      ['.', '_', '.'],
      ['|', '_', '|'],
      ['|', '_', '|'],
    ]);
  });
  it('should return digit 9 model', () => {
    expect(DIGITS.DIGIT9).toEqual([
      ['.', '_', '.'],
      ['|', '_', '|'],
      ['.', '.', '|'],
    ]);
  });
});
