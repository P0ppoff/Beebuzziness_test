const DIGITS = require('./digits.enum');

const createLines = (digit) => DIGITS[`DIGIT${digit}`].map((line) => line.reduce((acc, char) => acc + char, ''));

const printDigit = (digit) => {
  if (digit === 0 || digit === 1 || digit === 2 || digit === 3) {
    createLines(digit).map((line) => {
      console.log(line);
    });
  }
};

module.exports = {
  printDigit,
  createLines,
};
