const DIGITS = require('../src/digits.enum');

describe('Constants', () => {
  it('should return digit 0 model', () => {
    expect(DIGITS.DIGIT0).toEqual([
      [".", "_", "."],
      ["|", ".", "|"],
      [".", "_", "."]
    ]);
  });
});
