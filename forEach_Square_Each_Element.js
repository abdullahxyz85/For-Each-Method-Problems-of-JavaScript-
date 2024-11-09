// Problem 5: Square Each Element
// Task: Calculate the square of each element in an
// array and store it in a new array.

// Input: [2, 3, 4]
// Output: [4, 9, 16]
// Explanation: Use forEach to square each element and
// store the result in a new array.
const array = [2, 3, 4];

const result = [];
array.forEach((el) => {
  //   result.push(el * el);
  result.push(Math.pow(el, 2));
});

console.log(result);
