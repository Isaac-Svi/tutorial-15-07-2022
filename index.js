// LOOP
// To do something more than once

// console.log('howdy')
// console.log('howdy')
// console.log('howdy')
// console.log('howdy')
// console.log('howdy')
// console.log('howdy')

// for (let i = 0; i < 6; i++) {
//     console.log('howdy')
// }

// 1) Starting point
// 2) Condition that will eventually be false
// 3) Something to update variable in the condition so that it will be false

// let i = 0;
// while (i<6) {
//     console.log(`howdy`);

//     i++;
// }

// const fiveSecondsFromNow = Date.now() + 5000;
// while (Date.now() < fiveSecondsFromNow) {}
// console.log('2 seconds later...');

// for (let i = 0, j = 2; i < 6 && j < 8; j += 2, i++) {
//     console.log('i', i, 'j', j);
// }

// {
//     let i = 0,
//         j = 2;
//     while (i < 6 && j < 6) {
//         console.log('i', i);
//         console.log('j', j);

//         i++;
//         j = j + 2;
//     }
//     console.log(i, j);
// }

// for/of - for/in
// for/of - Array (or any itterable data structure - like Map or Set)
// for/in - Object

// var a = 5;
// [5]
// [1][2][3][4][5] -> Array
// [][b:2][][][][a:1][][] -> Object (Hash Table or Hash Map)
/**
 * letter | number
 * ---------------
 *    a   |   1
 *    b   |   2
 *    c   |   3
 */

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log('for', arr[i]);
// }

// for (const el of arr) {
//     console.log('for/of', el);
// }

// 'use strict';
// a = 5; - Will be a problem in strict mode without 'const' or 'let'
const obj = { a: 1, b: 2, c: 3, key: 5 };
// obj.a  obj['a']
for (const key in obj) {
    console.log(key, obj[key]);
}

if ('a' in obj) {
    console.log(obj['a']);
}

// IN operator can be used in a for/in loop to iterate through the keys in an object.  It can also be used in a condition to see if an object contains a specific key.
