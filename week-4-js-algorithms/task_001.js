// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
function findLongestString(tempArray) {
let longest = "";
    for (let i = 0; i< tempArray.length; i++) {
        if (tempArray[i].length > longest.length) {
            longest = tempArray[i];
        }
    }
return longest;
}

// Usage examples:
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333" 