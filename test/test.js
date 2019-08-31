const { createLines } = require('../src/printDigit');

describe('Create lines', () => {
  it('should return 0', () => {
    expect(createLines(0)).toEqual([
      '._.',
      '|.|',
      '._.',
    ]);
  });
  it('should return 1', () => {
    expect(createLines(1)).toEqual([
      '...',
      '..|',
      '..|',
    ]);
  });
  it('should return 2', () => {
    expect(createLines(2)).toEqual([
      '._.',
      '._|',
      '|_.',
    ]);
  });
  it('should return 3', () => {
    expect(createLines(3)).toEqual([
      '._.',
      '._|',
      '._|',
    ]);
  });
});
