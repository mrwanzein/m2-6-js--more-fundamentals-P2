// Exercise 11
// -----------

// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: 'brownies',
  fred: 'tiramisu',
  lisa: 'chocolate cake',
  riley: 'ice-cream',
  sunny: 'cheese cake',
  john: 'ice-cream',
  beth: 'cheese cake',
  summer: 'ice-cream',
  morty: 'apple pie',
  rick: 'brownies',
  andrew: 'cheese cake',
  jerry: 'rhubard pie',
  'jean-luc': 'cheese cake',
  tiffany: 'waffles',
  melissa: 'profiteroles',
};

const favouriteDessertsGroupB = {
  alice: 'pie',
  betty: 'deep-fried mars bar',
  colin: 'gummy bears',
  damien: 'child tears',
  ellicia: 'panda express',
  fertrude: 'gummy bears',
  glinda: 'pie',
  hethel: 'not applicable',
  irsula: 'rum cake',
  judas: 'revenge (served cold)',
  khloe: 'pie',
  lyndon: 'easter eggs',
  minda: 'dessert',
};

// Exercise 11-1
// -------------
// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

function sortDessertsByPopularity(dessertObject) {
  let trackingDessertOccurence = {};
  let values = Object.values(dessertObject);
  let finalArr = [];

  values.forEach((dessert, index, arr) => {
    trackingDessertOccurence[dessert] = 0;
    arr.forEach(x => {
      if(x === dessert) trackingDessertOccurence[dessert] += 1;
    })
  });

  for (let dessert in trackingDessertOccurence){
    finalArr.push([dessert, trackingDessertOccurence[dessert]])
  }

  return finalArr.sort((a, b) => b[1] - a[1]);
}

console.log(
  'Popular desserts in Group B:',
  sortDessertsByPopularity(favouriteDessertsGroupB)
);

// Exercise 11-2
// -------------
// Create a new object with the following form:

// {
//   'name of dessert': ['name1', 'name2']
// }

// To be clear:
// - The keys of this object should be the desserts
// - The values should be arrays of the names of the people who prefer this
//   dessert.

// Expected output for Group B:

// {
//   'pie': [ 'alice', 'glinda', 'khloe' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'fertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'ellicia' ],
//   'not applicable': [ 'hethel' ],
//   'rum cake': [ 'irsula' ],
//   'revenge (served cold)': [ 'judas' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'minda' ]
// }

// (The order doesn't matter for objects. Your desserts might be in a different
// order, and that's 100% OK).

function groupPeopleByDessert(dessertObject) {
  let dessertObj = {};
  let dessertNames = Object.values(dessertObject);

  dessertNames.forEach(dessert => {
    dessertObj[dessert] = [];
    for(let name in dessertObject){
      if(dessertObject[name] === dessert) dessertObj[dessert].push(name);
    }
  });

  return dessertObj;

}

console.log(
  'People grouped by dessert:',
  groupPeopleByDessert(favouriteDessertsGroupB)
);
