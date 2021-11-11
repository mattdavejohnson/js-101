// Given the family object, pring the name, age, and gender of each member

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' },
};

Object.keys(munsters).forEach((key) => {
  let name = key;
  let age = munsters[key]['age'];
  let gender = munsters[key]['gender'];

  console.log(`${name} is a ${age}-year-old ${gender}`);
});
