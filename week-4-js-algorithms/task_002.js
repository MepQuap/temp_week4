// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
function findLargestNumber(tempArray){
    let largestNum = tempArray[0];
    for (let i =0; i< tempArray.length; i++) {
        if (tempArray[i] > largestNum) {
            largestNum = tempArray[i];
        }
    }
    return largestNum;
}
// Usage examples:
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1