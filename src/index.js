const argv = require('minimist')(process.argv.slice(2));
const { printDigit } = require('./printDigit');

const printUsage = () => {
  console.log(`
  Ce programme s’utilise avec un nombre en base 10 comme paramètre. Il sera ensuite converti en 9 segments.
  `);
};

const givenNumber = argv._[0];

if (!argv.h && !Number.isNaN(Number(givenNumber))) {
  console.log();
  printDigit(`${givenNumber}`);
  console.log();
} else {
  printUsage();
}
