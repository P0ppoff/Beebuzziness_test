const { DIGIT0 } = require('./digits.enum');

const createLines = () => DIGIT0.map((line) => line.reduce((acc, char) => acc + char, ''));

const printDigit = (digit) => {
  if (digit === 0) {
    createLines().map((line) => {
      console.log(line);
    });
  }
};

module.exports = {
  printDigit,
  createLines,
};
