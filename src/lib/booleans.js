const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a === true && b === true;
};

const either = (a, b) => {
  return a === true || b === true;
};

const none = (a, b) => {
  return a === false && b === false;
};

const one = (a, b) => {
  return (a === true && b === false) || (b === true && a === false);
};

const truthiness = a => {
  return !!a;
};

const isEqual = (a, b) => {
  return a == b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = a => {
  return a % 2 != 0;
};

const isEven = a => {
  return a % 2 == 0;
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a));
};

const startsWith = (char, string) => {
  return string.startsWith('a');
};

const containsVowels = string => {
  return !!string.match('a|e|i|o|u|A|E|I|O|U');
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
