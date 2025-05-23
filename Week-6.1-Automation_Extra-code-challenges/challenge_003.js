// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array
// Usage examples:
//let arr = [10,20, -1,22,99,20, -9];
// console.log(`The negative numbers in an array is ${negativeCount}`) //"The negative numbers in an array is 2"
// console.log(`The negative numbers in an array is ${poitiveCount}`) // "The positive numbers in an array is 5"

function countPosNeg(arr) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }

  return { positiveCount, negativeCount };
}

// Example:
let arr2 = [10, 20, -1, 22, 99, 20, -9];
const { positiveCount, negativeCount } = countPosNeg(arr2);
console.log(`The negative numbers in an array is ${negativeCount}`); // 2
console.log(`The positive numbers in an array is ${positiveCount}`); // 5
