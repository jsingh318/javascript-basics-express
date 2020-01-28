const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

exports.elementAtIndex = (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
  res.status(200).json({ result: getNthElement(index, array) });
};
exports.toString = (req, res) => {
  const arr = req.body.array;
  res.status(200).json({ result: arrayToCSVString(arr) });
};
exports.append = (req, res) => {
  const { array, value } = req.body;
  res.status(200).send({ result: addToArray(value, array) });
};
exports.startsWithVowel = (req, res) => {
  const { array } = req.body;
  res.status(200).send({ result: elementsStartingWithAVowel(array) });
};
exports.removeElement = (req, res) => {
  const { index } = req.query;
  const { array } = req.body;
  if (index === undefined) {
    return res.status(200).send({ result: removeNthElement2(0, array) });
  }
  res.status(200).send({ result: removeNthElement2(index, array) });
};
