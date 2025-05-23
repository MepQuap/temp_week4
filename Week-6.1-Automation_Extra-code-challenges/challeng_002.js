// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them
// Usage examples:
//let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

// let n = arr.length;
// console.log(mostFrequent(arr, n));; // 40
function mostFrequent(arr, n) {
  let maxCount = 0;
  let mostFrequentItem;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      mostFrequentItem = arr[i];
    }
  }

  return mostFrequentItem;
}

// Example:
let arr1 = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];
console.log(mostFrequent(arr1, arr1.length)); // 40
