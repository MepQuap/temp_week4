// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.
function convertNumbersToStrings(tempArray) {
    const stringArray = []; 
    for (let i = 0; i < tempArray.length; i++) {
        stringArray.push(String(tempArray[i]));
    }
    return stringArray;
}
// Usage examples:
console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]