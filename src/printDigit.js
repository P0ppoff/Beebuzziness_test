const DIGIT0 = require('./digits.enum').DIGIT0;

const printDigit = digit => {
  if (digit === 0) {
    createLines().map(console.log)
  }
};

const createLines = () => {
  return DIGIT0.map(line => line.reduce((acc, char) => acc += char), '')
};

module.exports = {
  printDigit,
  createLines
};
