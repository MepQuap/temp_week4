// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// function palindrome(tempStr) {
//   // Regular expressions
//     const cleanStr = tempStr.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }
//----------------------------------
function palindrome(tempString) { 
  // for loop metho
  let reverse = "";
  for (let i=0; i<tempString.length; i ++) {
    reverse = tempString.charAt(i) + reverse;
  }
  if (reverse === tempString) {
    return true;
  }
  else {
    return false;
  }
}
//-------------------------------------------------
// function palindrome(tempString) {
//   // while loop method
//   // checking if string has length more than 0.
//   if (tempString.length < 0) {
//     console.log("No value in string.");
//       return false;
//   } 
//   let left = 0;
//   let right = tempString.length -1 ;
//   while (left <right) {
//     if (tempString[left] !== tempString[right]) {
//       // checking if tempString index on the left is equal with index on the right.
//       return false; 
//     }
//     left +=1;
//     right -=1;

//   }
//   return true;
// }
//-------------------------------------------
// Usage examples:
console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true