// Problem 9: Reverse Each String in Array
// Task: Reverse each string in an array of strings.

// Input: ['cat', 'dog', 'fish']
// Output: ['tac', 'god', 'hsif']
// Explanation: Use forEach to split each string, reverse it, and join it back, storing results in a new array.
const array = ["cat", "dog", "fish"];

const output = [];

array.forEach((el) => {
  output.push(el.split("").reverse().join(""));
});

console.log(array);
console.log(output);
