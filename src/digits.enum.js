const DOT = '.';
const UNDERSCORE = '_';
const PIPE = '|';

const DIGIT0 = [
  [DOT, UNDERSCORE, DOT],
  [PIPE, DOT, PIPE],
  [DOT, UNDERSCORE, DOT],
];

const DIGIT1 = [
  [DOT, DOT, DOT],
  [DOT, DOT, PIPE],
  [DOT, DOT, PIPE],
];

const DIGIT2 = [
  [DOT, UNDERSCORE, DOT],
  [DOT, UNDERSCORE, PIPE],
  [PIPE, UNDERSCORE, DOT],
];

const DIGIT3 = [
  [DOT, UNDERSCORE, DOT],
  [DOT, UNDERSCORE, PIPE],
  [DOT, UNDERSCORE, PIPE],
];

module.exports = {
  DIGIT0,
  DIGIT1,
  DIGIT2,
  DIGIT3,
};
