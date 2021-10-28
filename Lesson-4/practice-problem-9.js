// Add up all the ages from the object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrAges = Object.values(ages);

let totalAges = 0;

arrAges.forEach(function(age) {
  totalAges += age;
});

console.log(totalAges);