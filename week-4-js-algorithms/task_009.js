// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.
function findLongestWord(tempString) {
    if (!tempString) {
      return 0;
    }
    const words = tempString.split(" ");
    let longestLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestLength) {
        longestLength = words[i].length;
      }
    }
    return longestLength;
  }

// Usage examples:
console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7