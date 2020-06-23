// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  arr.unshift(first);
  arr[arr.length-1] = last;
  return arr
};

const printList = (arr) => {
  arr.forEach((food, index) => {
    console.log(`${index+1}. ${food}`);
  });
};

printList(fixList(mostPopularFood, 'bean burritos', 'buffalo-flavored cauliflower'));