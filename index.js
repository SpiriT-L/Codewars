import './basic-js-ds/stack.js';
import './array/array.js';
// import as* from './basic-js-ds/stack.js';

let matrix1 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function getMatrixElementsSum(matrix) {
  let sumMatrix = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    let sumColumn = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i]) {
        sumColumn += matrix[j][i];
        console.log(sumColumn);
      } else break;
    }
    sumMatrix += sumColumn;
  }
  return sumMatrix;
}

// console.log(getMatrixElementsSum(matrix));

// let n = 101  //, the result should be 1 (1 + 0 + 0 = 1)
let n1 = 91; //, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)

function getSumOfDigits(n) {
  let sumNamber;

  if (n <= 9) {
    return n;
  } else {
    sumNamber = getSumOfDigits(
      n
        .toString()
        .split('')
        .reduce((acc, current) => acc + +current, 0)
    );
  }

  return sumNamber;
}

// console.log(getSumOfDigits(n));

let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// The result should be [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  let result = arr.filter((item) => item != -1).sort((a, b) => a - b);

  return arr.map((item) => (item === -1 ? -1 : result.shift()));
}
// console.log(sortByHeight(arr));

let matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
];

//  [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
//  ]

function minesweeper(matrix) {
  let matrixCopy = matrix.map((item) => item.map((_) => 0));
  let matrixColumn = matrix[0].length;
  let matrixRows = matrix.length;

  for (let i = 0; i < matrixRows; i++) {
    for (let j = 0; j < matrixColumn; j++) {
      let sumN = 0;
      let minN = i - 1 < 1 ? 0 : i - 1;
      let maxN = i + 1 >= matrixRows ? matrixRows - 1 : i + 1;
      let minM = j - 1 < 1 ? 0 : j - 1;
      let maxM = j + 1 >= matrixColumn ? matrixColumn - 1 : j + 1;

      for (let n = minN; n <= maxN; n++) {
        let sumM = 0;
        for (let m = minM; m <= maxM; m++) {
          !(n === i && m === j) ? (sumM += matrix[n][m]) : null;
        }
        sumN += sumM;
      }

      matrixCopy[i][j] = sumN;
    }
  }
  return matrixCopy;
}

// console.log(minesweeper(matrix));

// let n = 00-1B-63-84-45-E6 //, the output should be true.

function isMAC48Address(n) {
  let macAdress = n.match(/[0-9A-F]{2}/g);

  if (macAdress.length === 6 && macAdress === n.join('-')) {
    return true;
  }

  return false;
}

// console.log(isMAC48Address(n));

let email = 'prettyandsimple@example.com'; //, the output should be 'example.com'

function getEmailDomain(email) {
  let result = email.split('@');

  return result.pop();
}

// console.log(getEmailDomain(email));

let names = ['file', 'file', 'image', 'file(1)', 'file'];
//  output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]

function renameFiles(names) {
  let result = [];

  names.forEach((name) => {
    if (!result.includes(name)) {
      result.push(name);
    } else {
      let i = 1;
      while (result.includes(`${name}(${i})`)) i++;
      result.push(`${name}(${i})`);
    }
  });
  return result;
}

// console.log(renameFiles(names));

let str = 'aabbbc'; // should return 2a3bc

function encodeLine(str) {
  // console.log(str);
  let result = '';
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    counter++;
    if (str[i] !== str[i + 1]) {
      counter === 1 && (counter = '');
      result += counter + str[i];
      counter = 0;
    }
  }
  return result;
}

// console.log(encodeLine(str));

// var output = document.getElementById("demo");
// var slider = document.getElementById("myRange").oninput = function() {
// var value = (this.value-this.min)/(this.max-this.min)*100

// this.style.background = 'liner-gradient(to right, #6b8dff 0%, #ff2a5f ' + value + '%, #fff ' + value + '%, #fff 100%)';
// this.style.background = `green`;
// this.style.width = `${value}%`;

// output.innerHTML = this.value;
// console.log(value);
// };
// console.log(slider);

// strCount({
//   first:  "1",
//   second: "2",
//   third:  false,
//   fourth: ["anytime",['2'],3,4],
//   fifth:  null,
//   sixth:  undefined,
//   seventh:{}
// })

// function strCount(obj) {

//   // console.log(obj1)
//   let newObj = Object.values(obj);
//   console.log(newObj)
//   let newObj1 = newObj.flat(Infinity);
//   console.log(newObj1)
//   let sumObj;

//   // console.log(newObj);

//   const result = newObj1.filter((sumObj) => typeof sumObj == 'string').length;
//   console.log(result);

//   return result;
// }

// const showRS = () => arguments[0] + arguments[1]

// const showRS = (year, quarter) => year + quarter

// const showRS = (text = year + quarter) => text

// const showRS = (year, quarter) => {return year + quarter}

// const showRS = (year, quarter) => {return year, quarter}
// let a = 4
// let b = 5

// const sum = {a, b} => ( return a + b )

// const sum = (a, b) => {  a + b }

// const sum = {a, b} => a + b
//
// const sum = (a, b) => a + b

// const sum = a, b => a + b

// console.log(sum(6, 5));

// if {}

// if (condition) {}

// if (condition) {} else {}

// if (condition) {} else (condition) {}

// if (condition) {} else if (condition) {}

// эти имена свойств допустимы

// function brightest(colors) {
//   let colorParametr = 0;
//   let maxValue = 0;

//   for (let i = 0; i < colors.length; i++) {
//     let color = colors[i],
//       r = parseInt(color.slice(1, 3), 16),
//       g = parseInt(color.slice(3, 5), 16),
//       b = parseInt(color.slice(5, 7), 16),
//       value = Math.max(r, g, b);
//     if (value > maxValue) {
//       maxValue = value;
//       colorParametr = i;
//     }
//   }
//   return colors[colorParametr];
// }

// console.log(brightest(["#00FF00", "#FFFF00"]));

//* =============== Что будет выведено в консоль? ===============
// 'use strict';

// const details = {
//   message: 'Hello',
// };
// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details));

// // [object Object]
// // true
// // false */
//!  'Hello!'

//* =============== Что будет выведено в консоль? ===============

// function getThis() {
//   return this
// }
// console.log(getThis());

//! [object Window]
// [object Object]
// [object Document]
// [Function]
// undefined

//* =============== Что будет выведено в консоль? ===============

// function foo() {
//   return {bar: 1}
// }
// console.log(typeof foo().bar);

// object
// string
//! number
// undefined

//* =============== Что будет выведено в консоль? ===============

// const details = {
//   name: 'John!'
// }
// function getMessage(message) {
//   return `${message} ${this.name}`
// }
// console.log(getMessage.apply(details, ['Hello']));

// [object Object]
//! 'Hello John!'
// false
// true

//* =============== Что будет выведено в консоль? ===============

// function foo() {
//   console.log(this)
// }
// foo.call(null)

//! window
// null
// document

//* =============== Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов? ===============

// let f = function(a,b) { return a+b }
//! let f = new Function("a,b", "return a+b")
//! let f = new Function("a", "b", "return a+b")
//! let f = (a, b) => a + b
// let f = (a, b) => { a + b }
// console.log(f(2, 3));

//* =============== Что будет выведено в консоль? ===============

// for (var i = 0; i < 10; i++) {
//   //...
// }
// console.log(i);

// undefined
// 9
//! 10
// Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// var name = 'John';

// function printName() {
//   console.log(name);
//   var name = 'Peter';
//   console.log(name);
// }

// printName();

// 'John' 'Peter'
// 'Peter' 'Peter'
//! undefined 'Peter'
// Возникнет ошибка

//* =============== Какой будет результат выполнения кода? ===============

// (
//   function (a) {
//     arguments[0] = 10
//     return a;
//   }
// )(5)

// 5
//! 10
// undefined

//* =============== Что будет выведено в консоль? ===============
// 'use strict';

// function getThis() {
//   return this
// }

// console.log(getThis());

//! [object Window]
// // [object Object]
// // [object Document]
// // [Function]
// // undefined

//* =============== Что будет выведено в консоль? ===============

// let f = function g() {return 23}

// console.log(typeof g());

// // number
// // undefined
// // function
//! Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// for(let i = 0; i < 3; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000)
// }

//! 0 1 2
// 3 3 3
// undefined undefined undefined
// Возникнет ошибка

//* =============== Какой будет результат выполнения кода? ===============

// const foo = bar();
// const number = 2;

// function bar() {return number}

// // console.log(foo);

// // 2
// // undefined
//! ReferenceError: number is not defined
// // ReferenceError: bar is not defined

//* =============== Что будет выведено в консоль? ===============

// var name = 'John'

// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// var printMessage = user.printMessage;
// printMessage()

// //'Hello, Peter!'
//! 'Hello, John!'
// // 'Hello, undefined!'
// // Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// console.log(message);
// var message = 'Hello'

// 'Hello'
//! undefined
// Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// printMessage();

// function printMessage() {
//   console.log('Hello!');
// }

//! 'Hello!'
// Возникнет ошибка
// undefined

//* =============== Каким образом осуществляется передача параметров в функцию? ===============

// Все переменные передаются по ссылке
// Все переменные передаются по значению
//! Примитивы передаются по значению, а объекты - по ссылке

//* =============== Что будет выведено в консоль? ===============

// var a = 1, b = function a(x) {x && a(--x)};
// console.log(a);

// 2
// 3
//! 1
// 0

//* =============== Что будет выведено в консоль? ===============
// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName()
// }, 1000)

//! 'John'
// // 'Peter'
// // undefined
// // Возникнет ошибка

//* =============== Укажите правильный способ получения доступа ко всем аргументам функции: ===============

// function foo() {
//   console.log(Function.getArguments(this));
// }

// function foo() {
//   console.log(arguments());
// }

// function foo() {
//   console.log(foo.getArguments());
// }

//! function foo() {
//!   console.log(this.arguments);
//! }

// foo()

//* =============== Какой будет результат выполнения кода? ===============

// function foo(a, b) {
//   return a*b;
// }

// const bar = foo.bind(null,2);
// bar(2)
// console.log(bar(2));

// 2
//! 4
// NaN
// Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// function getThis() {
//   return this
// }
// console.log(getThis());

//! [object Window]
// [object Object]
// [object Document]
// [Function]
// undefined

//* =============== Что будет выведено в консоль? ===============

// console.log(message);
// let message = 'Hello'

// 'Hello'
// undefined
//! Возникнет ошибка

//* =============== Что будет выведено в консоль? ===============

// let name = 'John'

// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }

// printName()

// 'John'
//! 'Peter'
// Возникнет ошибка
// undefined

//* =============== Что такое замыкание? ===============

// // Внутренняя область видимости функции
//!  Способность функции обращаться к внешней области видимости
// // Способность языка JS создавать блочную область видимости
// // Способность функции запоминать переменные из внешней области видимости в момент ее создания

//* =============== Укажите, что в JavaScript подвергается всплытию (hoisting)? ===============

// Function expression
//! Function declaration
// Arrow function
//! Объявление переменной
// Присваивание значения переменной

// for(var i = 0; i < 3; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000)
// }

//=================================================
const body = document.querySelector('body');

// console.log(body);

// console.log(document.body.hasAttribute('type'));
// console.log(document.body.getAttribute('type'));
// console.log(document.body.setAttribute('type', 'ky'));
// console.log(document.body.hasAttribute('sky'));
