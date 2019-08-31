const { constructLines } = require('../src/printDigit');

describe('ConstructLines method', () => {
  it('should return minimal three lines empty on empty query', () => {
    const emptyLines = constructLines('');
    expect(emptyLines.length).toBe(3);
    expect(emptyLines).toEqual(['', '', '']);
  });
  it('should return one element', () => {
    const oneElement = constructLines('1');
    expect(oneElement.length).toBe(3);
    expect(oneElement).toEqual([
      '... ',
      '..| ',
      '..| ',
    ]);
  });
  it('should return many element', () => {
    const manyElement = constructLines('0123456789');
    expect(manyElement.length).toBe(3);
    expect(manyElement).toEqual([
      '._. ... ._. ._. ... ._. ._. ._. ._. ._. ',
      '|.| ..| ._| ._| |_| |_. |_. ..| |_| |_| ',
      '._. ..| |_. ._| ..| ._| |_| ..| |_| ..| ',
    ]);
  });
});
