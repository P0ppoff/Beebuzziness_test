const { createLines: createLinesSpec } = require('../src/printDigit');

describe('Create lines', () => {
  it('should return 0', () => {
    expect(createLinesSpec(0)).toEqual([
      '._.',
      '|.|',
      '._.',
    ]);
  });
  it('should return 1', () => {
    expect(createLinesSpec(1)).toEqual([
      '...',
      '..|',
      '..|',
    ]);
  });
  it('should return 2', () => {
    expect(createLinesSpec(2)).toEqual([
      '._.',
      '._|',
      '|_.',
    ]);
  });
  it('should return 3', () => {
    expect(createLinesSpec(3)).toEqual([
      '._.',
      '._|',
      '._|',
    ]);
  });
});
