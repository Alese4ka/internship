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
      return a + c;
    };
  }
  return a + b;
}

function sub(a, b){
  if (b === undefined) {
    return function (c) {
      return a - c;
    };
  }
  return a - b;
}

function mul(a, b){
  if (b === undefined) {
    return function (c) {
      return a * c;
    };
  }
  return a * b;
}

function div(a, b){
  if (b === undefined) {
    return function (c) {
      return a / c;
    };
  }
  return a / b;
}

const pipe = (...fns) => (x) => fns.reduce((res, fn) => fn(res), x);

// const x = pipe(add(6), mul(2))(3);
// console.log(result);
