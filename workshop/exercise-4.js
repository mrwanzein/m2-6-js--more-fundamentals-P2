// Exercise 4
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

const converter = (obj) => {
  let arr = [[...Object.keys(obj)], [...Object.values(obj)]];
  return arr;
};

console.log(converter(foodPairings));
