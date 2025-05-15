import helperMethods from "./helper.methods.js";
import response from './response.matches.json' assert { type: 'json' };

const matches = response.matches; // Access the actual array here

console.log(helperMethods.filterMatchesByLocationAndStatus(matches)); // ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoatingAndShower(matches)); // ["10-015"]
console.log(helperMethods.filterMatchesByLocationAndPrice(matches)); // ["10-015"]
console.log(helperMethods.filterMatchesByCreatorFeeAndStatus(matches)); // ["10-016", "10-015"]
console.log(helperMethods.filterMatchesByCoveringAndDressingRoom(matches)); // ["10-016"]
