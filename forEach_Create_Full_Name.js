// Problem 6: Create Full Names
// Task: Combine firstName and lastName properties in an array
// of objects into a fullName property.

// Input: [{ firstName: 'John', lastName: 'Doe' },
// { firstName: 'Jane', lastName: 'Smith' }]
// Output: [{ fullName: 'John Doe' },
// { fullName: 'Jane Smith' }]
// Explanation: Use forEach to create a new array where each object has a fullName property.
const array = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];

const output = [];

array.forEach((el) => {
  output.push(`{fullName: ${el.firstName + el.lastName}}`);
});
console.log(output);
