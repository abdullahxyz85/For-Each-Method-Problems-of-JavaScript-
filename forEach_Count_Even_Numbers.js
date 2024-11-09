// Problem 3: Count of Even Numbers
// Task: Count how many even numbers are present in an array.

// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9,  10]
// Output: 5
// Explanation: Use forEach to check if each element is even, and increase the count if it is.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

array.forEach((el) => {
  if (el % 2 === 0) {
    count++;
  }
});
console.log(count);
