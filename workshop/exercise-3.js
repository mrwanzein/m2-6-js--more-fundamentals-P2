// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

const fixList = (arr) => {
  return arr.map((food, index) => food + ` (${index+1})`).sort();
};

const printList = (arr) => {
  arr.forEach((food) => {
    console.log(food);
  });
};

printList(fixList(mostPopularFood));


