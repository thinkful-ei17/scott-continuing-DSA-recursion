'use strict';


//Counting Sheep
// function countSheep(sheep) {
//   if (sheep === 0) {
//     return;
//   }

//   console.log(`${sheep} - Another sheep jump over the fence`);
//   countSheep(sheep - 1);

// }

// countSheep(3);

//Array Double
function doubleArray(arr) {
  if (!arr.length) {
    return [];
  }

  // console.log(arr);
  return [arr[0] * 2, ...doubleArray(arr.slice(1))];
}

let numArray = [1, 2, 3];
console.log(doubleArray(numArray));