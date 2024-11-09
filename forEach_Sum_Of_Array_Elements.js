// Problem 1: Sum of Array Elements
// Task: Calculate the sum of all elements in an array.

// Input: [1, 2, 3, 4, 5]
// Output: 15
// Explanation: Loop through the array using forEach
// and accumulate the sum of the elements.
const array = [1, 2, 3, 4, 5];

let sum = 0;

array.forEach((el) => (sum = sum + el));
console.log(sum);

//For each method accepts the callback function and is used to the
// apply the all elements of array.
