const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(e => {
    return e.age;
  });
};

const findByName = (name, people) => {
  return people.filter(people => people.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  const ages = people.map(e => {
    return e.age;
  });
  return ages.reduce((a, b) => a + b, 0) / ages.length;
};

const createTalkingPerson = (name, age) => {
  (this.name = name),
    (this.age = age),
    (this.introduce = function(n) {
      return `Hi ${n}, my name is ${name} and I am ${age}!`;
    });
  return this;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
