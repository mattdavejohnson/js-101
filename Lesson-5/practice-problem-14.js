// Given the data structure, return an array containing the colors of the
// fruits and the sizes of the vegetables. Uppercase the sizes and capitalize
// the colors.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function printObj(object) {
  let returnArray = [];

  let objKeys = Object.keys(object);

  objKeys.forEach((key) => {
    if (obj[key]['type'] === 'fruit') {
      returnArray.push(
        obj[key]['colors'].map((element) => {
          return element[0].toUpperCase() + element.slice(1);
        })
      );
    } else {
      returnArray.push(obj[key]['size'].toUpperCase());
    }
  });

  return returnArray;
}

let filtered = printObj(obj);
console.log(filtered);
