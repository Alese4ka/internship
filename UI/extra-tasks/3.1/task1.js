/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

function getNum(arr) {
  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    for (let j = i; j < arr.length; j += 1) {
      sum += arr[j];
      maxNum = Math.max(maxNum, sum);
    }
  }
  return maxNum;
}

// console.log(getNum([-2,1,-3,4,-1,2,1,-5,4]));
