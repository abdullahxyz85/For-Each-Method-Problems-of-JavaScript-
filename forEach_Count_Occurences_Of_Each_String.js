// Problem 8: Count Occurrences of Each Character
// Task: Count the occurrences of each character in a string.

// Input: 'banana'
// Output: { b: 1, a: 3, n: 2 }
// Explanation: Convert the string to an array of characters, then use forEach to count each character's occurrences in an object.

function countCharacter(str){

    let charArray = str.split("");

    let charCount = {};

    charArray.forEach((char) => {
        if(charCount[char]){
            charCount[char]++;
        }
        else{
            charCount[char] === 1;
        }
    });
    return charCount
}
const result = countCharacter("banana");
console.log(result);
