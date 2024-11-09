// Problem 7: Filter Positive Numbers
// Task: Extract positive numbers from an array.

// Input: [-3, 4, -2, 5, 6]
// Output: [4, 5, 6]
// Explanation: Use forEach to add positive numbers to a new array.

const array = [-3, 4, -2, 5, 6];
const output = [];

array.forEach((el) => {
  if (el > 0) {
    output.push(el); //wu element ma hamna element hi push krwa dena ha
  }
});
console.log(output);
