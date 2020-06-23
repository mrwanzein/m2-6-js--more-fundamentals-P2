// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function

const createRecommendations = (obj) => {
  let arr = Object.keys(obj);
  let finalArr = arr.map(x => `With ${x}, is it best to have ${obj[x]}`);
  return finalArr;
}

// printRecommendations function

const printRecommendations = (arr) => arr.forEach(x => console.log(x)); 

// function call (done)
printRecommendations(createRecommendations(foodPairings));
