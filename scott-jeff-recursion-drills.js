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

//Reverse String Reversed
// function reverseString(string){
//   if(string === ''){
//     return '';
//   }
//   return string[string.length-1] + reverseString(string.slice(0, string.length-1));
// }

// console.log(reverseString('german shepard'));


// //nth Triangular Number

// function triangularNumber(num){
//   if (num === 1){
//     return 1;
//   }
//   return num + triangularNumber(num-1);
// }

// console.log(triangularNumber(5));
// input 1 === output 1
// input 2 === output 2 + 1 === 2 + (output 1)
// input 3 === output 3 + 2 + 1 === 3 + (output 2)
// input 4 === output 4 + 3 + 2 + 1 === 4 + (output 3)


//String Splitter
// function splitString(str, separator) {

//   console.log(str);
//   if (!str.includes(separator)) {
//     return [str];
//   }

//   return [str.slice(0, str.indexOf(separator)), ...splitString(str.slice(str.indexOf(separator) + separator.length), separator)];
// }

// console.log(splitString('whas up ma kitties what is good', ' '));

//Binary Representation

// function toBinary(num){
//   console.log('num:', num);
  
//   if (num === 1) {
//     return 1;
//   }
//   if(num === 0){
//     return 0;
//   }
//   return toBinary((Math.floor(num / 2))) + `${(num % 2)}`;
// }

// console.log(toBinary(5720));
// console.log('input 0 === output 0',toBinary(0));
// console.log('input 1 === output 1',toBinary(1));
// console.log('input 2 === output 10',toBinary(2));
// console.log('input 3 === output 11',toBinary(3));
// console.log('input 6 === output 110',toBinary(6));
// console.log('input 25 === output 11001',toBinary(25));

// 1 % 2 => 1
// 2 % 2 => 0
// 3 % 2 => 1
// 4 % 2 => 0

    // 6%2   6/2
    //  0     3
    //       3%2  3/2
    //        1    1
    //            1%2  1/2
    //             1    0

          //2^4 |      2^3 |    2^2 | 2^1 | 2^0
// 16 |      8   |     4  |  2  |  1
// 2*2*2*2 | 2*2*2 | 2*2  | 2 

//input 0 === output 0
//input 1 === output 1
//input 2 === output 10
//input 3 === output 11
//input 6 === output 110
//input 25 === output 11001

// to get 3 => 3%2 (1) 
      //Math.floor(3/2) (1)
              // 1 % 2 (1)
                    // Math.floor(1/2) (0)