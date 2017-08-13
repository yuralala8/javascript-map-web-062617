// doubling a list of numbers

const numbers = [1, 2, 3];
const doubledNums = map(numbers, function(number) {
  return num * 2;
});

console.log(doubledNums);



// mapping with a callback function

function map(collection, callback) {
const result = [];

for (let i = 0; i < collection.length; i++) {
const element = collection[i];
result.push(callback(element, i, collection));
}
    return result;
}



// transforming autobots


const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, { //Object.assign allows copying the object and changing its values without modifying the original array.
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobots);




// Use of Array.prototype.map()


const transformedAutobotsWithMap =
  autobots.map(function (autobot) {
    return Object.assign({}, autobot, {
      strength: autobot.strength * 2,
      isTransformed: true,
    });
  }
);

console.log(transformedAutobotsWithMap);
