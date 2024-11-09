// Problem 10: Add Index to Each Element
// Task: Append each element's index as a suffix to the element.

// Input: ['apple', 'banana', 'cherry']
// Output: ['apple0', 'banana1', 'cherry2']
// Explanation: Use forEach to add each element's index as a suffix and store the results in a new array.
const array = ["apple", "banana", "cherry"];

const output = [];

//forEach method contains three parameters and two parameters are opitional.

array.forEach((el, index) => {
  output.push(el + index);
});
console.log(output);
