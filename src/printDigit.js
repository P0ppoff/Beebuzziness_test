const DIGITS = require('./digits.enum');

const concatenation = (line) => line.reduce((acc, char) => acc + char, '');
const concatWithSpace = (line) => `${concatenation(line)} `;
const createLines = (digit) => DIGITS[`DIGIT${digit}`].map(concatenation);
const zip = (arrayWhereItemsWillBeAdded, ...arrs) => arrayWhereItemsWillBeAdded.map((currentElementToComplete, currentIndex) => arrs.reduce(
  (elementCompleted, arr) => [...elementCompleted, arr[currentIndex]],
  [currentElementToComplete],
));

const constructLines = (queryParams) => {
  let digitsList = queryParams
    .split('')
    .map(createLines);
  let threeLinesToPrint = ['', '', ''];
  while (digitsList.length !== 0) {
    const [firstLine, ...nextLines] = digitsList;
    threeLinesToPrint = zip(threeLinesToPrint, firstLine);
    threeLinesToPrint = threeLinesToPrint.map(concatWithSpace);
    digitsList = nextLines;
  }
  return threeLinesToPrint;
};

const printDigit = (queryParams) => {
  constructLines(queryParams).map((line) => {
    console.log(line);
  });
};

module.exports = {
  concatenation,
  concatWithSpace,
  createLines,
  zip,
  constructLines,
  printDigit,
};
