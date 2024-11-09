// Problem 4: Convert Array to Uppercase Strings
// Task: Convert all strings in an array to uppercase.

// Input: ['apple', 'banana', 'cherry']
// Output: ['APPLE', 'BANANA', 'CHERRY']
// Explanation: Use forEach to convert each string to uppercase and store it in a new array.
const array = ["apple", "banana", "cherry"];
const output = [];

//forEach ma ham na us pora ku new variable ma store nhi krwana balka ju callback kiya hu ga usku ju arrow function ma kiya hu ga usku bhio ak new variable ma store krwana ha

array.forEach((el) => {
  //el show the index that will return the parameters of el.
  output.push(el.toUpperCase());
});
console.log(output);
