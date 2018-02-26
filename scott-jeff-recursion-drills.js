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
// function doubleArray(arr) {
//   if (!arr.length) {
//     return [];
//   }

//   // console.log(arr);
//   return [arr[0] * 2, ...doubleArray(arr.slice(1))];
// }

// let numArray = [1, 2, 3];
// console.log(doubleArray(numArray));

//Reverse String

// function reverseString(string){
//   if(string === ''){
//     return '';
//   }

//   return reverseString(string.slice(1)) + string[0];
// }

// console.log(reverseString('german shepard'));

//nth Triangular Number

function triangularNumber(num){
  if (num === 1){
    return 1;
  }
  return num + triangularNumber(num-1);
}

console.log(triangularNumber(5));
// input 1 === output 1
// input 2 === output 2 + 1 === 2 + (output 1)
// input 3 === output 3 + 2 + 1 === 3 + (output 2)
// input 4 === output 4 + 3 + 2 + 1 === 4 + (output 3)