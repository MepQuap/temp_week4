// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.
function factorial(tempNum) {
    //Using Iteration method
    let totalFactorial = 1;
    for (let i = 1; i <= tempNum; i++) {
        totalFactorial *= i;
    }
    return totalFactorial;
 }
//-------------------------------------
// function factorial(tempNum) {
//     //  Using Recursion method
//     //preventing error; Checking tempNum if it's = 0 or not.
//     if(tempNum === 0){
//         return 1;
//     }
//     else {
//         return tempNum * factorial(tempNum-1);
//     }     
// }
//-------------------------------------
// function factorial(tempNum) {
//     // Using a While Loop method
//     let totalFactorial = 1;
//     while (tempNum > 1) {
//         totalFactorial *= tempNum;
//         tempNum--;
//     }
//     return totalFactorial;
// }
//-------------------------------------
// Usage examples:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800
//-------------------------------------
// //Using Functional Programming
// const fact = (n) =>
//     n === 0 || n === 1
//         ? 1
//         : Array.from({ length: n }, (_, i) => i + 1).reduce(
//             (acc, num) => acc * num,
//             1
//         );
// console.log(fact(5));
// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(10));