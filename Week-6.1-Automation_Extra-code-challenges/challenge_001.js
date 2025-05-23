// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// Usage examples:
// console.log(getLargestPalindrome(1000));; // 906609

function getLargestPalindrome(limit) {
  let maxPalindrome = 0;

  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      let product = i * j;
      if (isPalindrome(product) && product > maxPalindrome) {
        maxPalindrome = product;
      }
    }
  }

  return maxPalindrome;
}

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

// Example:
console.log(getLargestPalindrome(1000)); // 906609
