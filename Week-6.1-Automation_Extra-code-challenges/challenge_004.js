// Challenge 4: Find duplicates in two arrays 
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays
// Usage examples:
//const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8]; //console.log(findDuplicates(array1, array2)); //  [4, 5, 7]
function findDuplicates(array1, array2) {
  const combined = array1.concat(array2);
  const duplicates = [];

  for (let i = 0; i < combined.length; i++) {
    for (let j = i + 1; j < combined.length; j++) {
      if (combined[i] === combined[j] && !duplicates.includes(combined[i])) {
        duplicates.push(combined[i]);
        break;
      }
    }
  }

  return duplicates;
}

// Example:
const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];
console.log(findDuplicates(array1, array2)); // [4, 5, 7]
