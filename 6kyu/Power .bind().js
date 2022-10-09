// Power .bind()
// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...args) {
    const correctCtx = this === global ? ctx : this;
    return func.apply(correctCtx, args);
  };
};

const obj1 = { o: 1 };
const obj2 = { o: 2 };

function prn() {
  console.log(JSON.stringify(this));
}

const prn1 = prn.bind(obj1);
prn1();

const prn2 = prn1.bind(obj2);
prn2();

// correctCtx
