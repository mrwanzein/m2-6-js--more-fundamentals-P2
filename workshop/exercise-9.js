// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' }, age: 26 },
  { name: { first: 'Ben', last: 'Bitdiddle' }, age: 34 },
  { name: { first: 'Eva', middle: 'Lu', last: 'Ator' }, age: 40 },
  { name: { first: 'Lem', middle: 'E.', last: 'Tweakit' }, age: 45 },
  { name: { first: 'Louis', last: 'Reasoner' }, age: 21 },
  { name: { first: 'Shahan', middle: 'Haig', last: 'Krakirian' }, age: 21 },
];

//-------------------------------------------------

// Exercise 9.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  let avg = peopleArr.map(x => x.age).reduce((a, b) => a+b);
  return Math.round(avg/peopleArr.length);
}

console.log(`Average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 9.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  let arr = peopleArr.map(x => `${x.name.first} ${x.name.middle ? x.name.middle : ''} ${x.name.last}`);
  return arr;
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 9.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age.

function olderPeople(peopleArr, age) {
  let arr = peopleArr.filter(x => x.age > age);
  return arr;
}

console.log(olderPeople(people, 26));
