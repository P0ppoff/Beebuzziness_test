const printDigit = require('./printDigit').printDigit;

if (process.argv.length === 3) {
  printDigit(Number(process.argv[2]));
}
