// Problem 2: Double Each Element
// Task: Create a new array where each element is double
// the original value.

// Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]
// Explanation: Use forEach to multiply each element by 2 and store it in a new array
const array = [1, 2, 3, 4, 5];
const doubleArray = [];

array.forEach((element) => {
  doubleArray.push(element * 2);
});

console.log(doubleArray);
//forEach ma hama return nhi likhna prta callback ma.
