//? =============== Что будет выведено в консоль? ===============
// 'use strict';

// const details1 = {
//   message: 'Hello',
// };
// function getMessage() {
//   return this.message;
// }

// console.log(getMessage.call(details1));

// [object Object]
// true
// false */
//!  'Hello!'

//? =============== Что будет выведено в консоль? ===============

// function getThis() {
//   return this
// }
// console.log(getThis());

//! [object Window]
// [object Object]
// [object Document]
// [Function]
// undefined

//? =============== Что будет выведено в консоль? ===============

// function foo() {
//   return {bar: 1}
// }
// console.log(typeof foo().bar);

// object
// string
//! number
// undefined

// =============== Что будет выведено в консоль? ===============
//? =============== Что будет выведено в консоль? ===============
// const details = {
//   name: 'John!'
// }
// function getMessage(message) {
//   return `${message} ${this.name}`
// }
// console.log(getMessage.apply(details, ['Hello']));

// Возникает ошибка
// [object Object]
//! 'Hello John!'
// false
// true

//? =============== Что будет выведено в консоль? ===============

// function foo() {
//   console.log(this)
// }
// foo.call(null)

//! window
// null
// document


//? =============== Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов? ===============

//! let f = function(a,b) { return a+b }
//* let f = new Function("a,b", "return a+b")
//* let f = new Function("a", "b", "return a+b")
//! let f = (a, b) => a + b
// let f = (a, b) => { a + b }
// console.log(f(2, 3));

//? =============== Что будет выведено в консоль? ===============

// for (var i = 0; i < 10; i++) {
//   //...
// }
// console.log(i);

// undefined
// 9
//! 10
// Возникнет ошибка

//? =============== Что будет выведено в консоль? ===============

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

//? =============== Какой будет результат выполнения кода? ===============

// (
//   function(a) {
//     arguments[0] = 10
//     return a;
//   }
// )(5)

// 5
//! 10
// undefined


//! =============== Что будет выведено в консоль? ===============
//? =============== Что будет выведено в консоль? ===============
// 'use strict';

// function getThis() {
//   return this
// }

// console.log(getThis());

//* [object Window]
// [object Object]
// [object Document]
// [Function]
//! undefined


//? =============== Что будет выведено в консоль? ===============

// let f = function g() {return 23}

// console.log(typeof g());

// number
// undefined
// function
//! Возникнет ошибка

// =============== Что будет выведено в консоль? ===============
//? =============== Что будет выведено в консоль? ===============

// for(var i = 0; i < 3; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000)
// }

// 0 1 2
//! 3 3 3
// undefined undefined undefined
// Возникнет ошибка

//? =============== Что будет выведено в консоль? ===============

// for(let i = 0; i < 3; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000)
// }

//! 0 1 2
// 3 3 3
// undefined undefined undefined
// Возникнет ошибка

//? =============== Какой будет результат выполнения кода? ===============

// const foo = bar();
// const number = 2;

// function bar() {return number}

// console.log(foo);

// 2
// undefined
//! ReferenceError: number is not defined
// ReferenceError: bar is not defined


//? =============== Что будет выведено в консоль? ===============

// var name = 'John'

// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// var printMessage = user.printMessage;
// printMessage()

//'Hello, Peter!'
//! 'Hello, John!'
// 'Hello, undefined!'
// Возникнет ошибка

//? =============== Что будет выведено в консоль? ===============

// console.log(message);
// var message = 'Hello'


// 'Hello'
//! undefined
// Возникнет ошибка

//? =============== Что будет выведено в консоль? ===============

// printMessage();

// function printMessage() {
//   console.log('Hello!');
// }

//! 'Hello!'
// Возникнет ошибка
// undefined

//? =============== Каким образом осуществляется передача параметров в функцию? ===============

// Все переменные передаются по ссылке
// Все переменные передаются по значению
//! Примитивы передаются по значению, а объекты - по ссылке


//? =============== Что будет выведено в консоль? ===============

// var a = 1, b = function a(x) {x && a(--x)};
// console.log(a);

// 2
// 3
//! 1
// 0

//? =============== Что будет выведено в консоль? ===============
// let name = 'John';
// function printName() {
//   console.log(name);
// }

// setTimeout(() => {
//   let name = 'Peter';
//   printName()
// }, 1000)

//! 'John'
// 'Peter'
// undefined
// Возникнет ошибка

// =============== Укажите правильный способ получения доступа ко всем аргументам функции: ===============
// =============== Укажите правильный способ получения доступа ко всем аргументам функции: ===============
//? =============== Укажите правильный способ получения доступа ко всем аргументам функции: ===============

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

//  foo()

//? =============== Какой будет результат выполнения кода? ===============

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

//? =============== Что будет выведено в консоль? ===============

function getThis() {
  return this
}
console.log(getThis());

//! [object Window]
// [object Object]
// [object Document]
// [Function]
// undefined

//? =============== Что будет выведено в консоль? ===============

// console.log(message);
// let message = 'Hello'

// 'Hello'
// undefined
//! Возникнет ошибка

//? =============== Что будет выведено в консоль? ===============

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

//? =============== Что такое замыкание? ===============

// Внутренняя область видимости функции
//*  Способность функции обращаться к внешней области видимости
// Способность языка JS создавать блочную область видимости
//! Способность функции запоминать переменные из внешней области видимости в момент ее создания

//* =============== Укажите, что в JavaScript подвергается всплытию (hoisting)? ===============

// Function expression
//! Function declaration
// Arrow function
//! Объявление переменной
// Присваивание значения переменной