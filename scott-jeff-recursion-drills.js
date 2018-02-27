'use strict';


//============Counting Sheep Recursive =============

// function countSheep(sheep) {
//   if (sheep === 0) {
//     return;
//   }

//   console.log(`${sheep} - Another sheep jump over the fence`);
//   countSheep(sheep - 1);

// }
// countSheep(3);




// ============= Counting Sheep Iterative ==========

// function countSheep(sheep){
//   for(let i = sheep; i > 0 ; i--){
//     console.log(`${i} - Another sheep jumped over the fence`);
//   }
//   console.log(`All the sheep have left`);
// }

// countSheep(3);




//======== Array Double Recursive ============

// function doubleArray(arr) {
//   if (!arr.length) {
//     return [];
//   }

//   // console.log(arr);
//   return [arr[0] * 2, ...doubleArray(arr.slice(1))];
// }

// let numArray = [1, 2, 3];
// console.log(doubleArray(numArray));




//========= Array Double Iterative without .map ==========

// function doubleArray(arr){
//   const doubles = [];
//   for (let i = 0; i < arr.length; i++){
//     doubles.push(arr[i] * 2);
//   }
//   return doubles;
// }

// let numArray = [1, 2, 3];
// console.log(doubleArray(numArray));




//=========== Array Double Iterative with map ==============

// function doubledArray(arr){
//   return arr.map(num => num * 2);
// }

// let numArray = [1, 2, 3];
// console.log(doubleArray(numArray));




//======= Reverse String Recursive ==============

// function reverseString(string){
//   if(string === ''){
//     return '';
//   }

//   return reverseString(string.slice(1)) + string[0];
// }

// console.log(reverseString('german shepard'));



//======== Reverse String Recursive Reversed ===========
// function reverseString(string){
//   if(string === ''){
//     return '';
//   }
//   return string[string.length-1] + reverseString(string.slice(0, string.length-1));
// }

// console.log(reverseString('german shepard'));



// Reverse String Iterative w/o reverse method ================

// function reverseString(string){
//   const reversed = [];
//   for(let i = string.length - 1; i >= 0 ; i--){
//     reversed.push(string[i]);
//   }
//   return reversed.join('');
// }
// console.log(reverseString('german shepard'));



//============= Reverse String Iterative w/reverse method ========

// function reverseString(string){
//   return string.split('').reverse().join('');
// }
// console.log(reverseString('german shepard'));



//=========== nth Triangular Number Recursive =================

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


//============== nth Triangular Number Iterative =======================

// function triangularNumber(num){
//   let sum = 0;
//   for(let i = 0; i <= num; i++){
//     sum += i;
//   }
//   return sum;
// }

// console.log(triangularNumber(5));



//=============== String Splitter Recursive ====================


// function splitString(str, separator) {

//   console.log(str);
//   if (!str.includes(separator)) {
//     return [str];
//   }

//   return [str.slice(0, str.indexOf(separator)), ...splitString(str.slice(str.indexOf(separator) + separator.length), separator)];
// }

// console.log(splitString('whas up ma kitties what is good', ' '));




//================= Binary Representation Recursive ========================

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


//================== Anagrams A Mess and Not Finished ================================

// //Anagrams
// function anagram(str) {
//   if (str === '') {
//     return '';
//   }


//   str[0] + anagram('tac')[...arr]
// }

// console.log(anagram('cat'));

//Input: at
//Output: at
//        ta
// ['tac', 'tca', 'cat', 'cta', 'atc', 'act'];
// ['cats', 'cast', 'ctas', 'ctsa', 'csat', 'csta', 'tsca', 'tcas'..
// ['stac', 'stca', 'scat', 'scta', 'satc', 'sact']]

//Iterative version of anagram

function anagrams(cats, i=0) {
  if(i === cats.length-1){
    return; 
  }

  for (let i = 0; i < cats.length; i++) {
    let slice = cats.slice(0, i) + cats.slice(i + 1);
    console.log(`${cats[i]}${slice}`);
  }
  i++;
  return anagrams((cats.slice(1) + cats[0]), i);
}

anagrams('cat');

// function getAllPermutations(string)
// define results
// if string is a single character
// add the character to results
// return results
// for each char in string
//   define innerPermutations as a char of string
// set innerPermutations to getAllPermutations(without next char)
// foreach string in innerPermutations
// add defined char and innerPermutations char
// return results


// function anagrams(string){
    

// }

// function one(string){
//   const firstLetter = string[0];
//   const rest = string.slice(1).split('');
//   for(let i = 0; i < rest.length; i++){
//     const end = rest.pop();
//     rest.unshift(end);
//     console.log([firstLetter,...rest].join(''));
//   }

// }

// function anagram(string){
//   const letterArray = string.split('');
//   for(let i=0; i < string.length; i++){
//     const first = string.slice(0, i);
//     const second = string.slice(i + 1);
//     const third = string[i];
//     one(first + second + third);
//   }
  

// }

// one('cat');


// Cory Mickelson	7: 03 PM

// function getAllPermutations(string)
// define results
// if string is a single character
// add the character to results
// return results
// for each char in string
//   define innerPermutations as a char of string
// set innerPermutations to getAllPermutations(without next char)
// foreach string in innerPermutations
// add defined char and innerPermutations char
// return results

// c + anagrams(ats); => string[0] + anagrams(string.slice(1))
// a + anagrams(st); => string[0] + anagrams(string.slice(1))
// t + anagrams(s); => string[0] + anagrams(string.slice(1))
// s + ''; => string[0] + anagrams('')

// console.log(string[0]);
// let slice = string.slice(0) + cats.slice(i + 1);
// console.log(`${cats[i]} + ${slice}`);
// return 


// ltr => string.slice(0, string.indexOf(ltr))
  
  

   



// anagrams('cat');

//cat cta atc act tca tac

//======= Factorial Recursive =================

// function calcFactorial(num){
//   if(num === 1){
//     return 1;
//   }
//   return num * calcFactorial(num-1);
// }

// console.log(calcFactorial(4));


//============= Fibonacci Recursive ===============


