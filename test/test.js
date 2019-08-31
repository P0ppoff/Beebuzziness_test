const createLines = require('../src/printDigit').createLines;

describe('Create lines', () => {
  it('should return 0', () => {
    expect(createLines()).toEqual([
      "._.",
      "|.|",
      "._."
    ]);
  });
});
