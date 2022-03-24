/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable eol-last */
'use strict';

function add(a, b){
  if (b === undefined) {
    return function (c) {
      return c + a;
    };
  }
  return a + b;
}

function sub(a, b){
  if (b === undefined) {
    return function (c) {
      return c - a;
    };
  }
  return a - b;
}

function mul(a, b){
  if (b === undefined) {
    return function (c) {
      return c * a;
    };
  }
  return a * b;
}

function div(a, b){
  if (b === undefined) {
    return function (c) {
      return c / a;
    };
  }
  return a / b;
}

const pipe = (...fns) => (x) => fns.reduce((res, fn) => fn(res), x);

// const a = add(1, 2); // 3
// const b = sub(a, 10); // -7
// const c = mul(22, 2); // 44
// const d = div(a, 10); // 0.3
// console.log(a, b, c, d);
// const sub1 = sub(1); // sub1 отнимает от любого числа единицу
// const e = sub1(b); // -8
// const f = mul(sub(a,1))(c); // 88
// console.log(e, f);
// const doSmth = pipe(add(58), sub(29), mul(30), div(3)); // функция, последовательно выполняющая эти операции.
// const result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
// const x = pipe(add(1), mul(2))(3); // 8
// console.log(result,x);
