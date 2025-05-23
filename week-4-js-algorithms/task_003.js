// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
function findDollarStrings(tempArray){ 
const dollarFound = [];
    for (let i=0;i < tempArray.length ; i ++  ) {
        if (tempArray[i].includes ('$',0)) {
            dollarFound.push(tempArray[i]);
        }
    }
    return dollarFound;
    }
// Usage examples:
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []