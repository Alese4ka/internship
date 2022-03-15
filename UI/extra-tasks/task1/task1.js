'use strict';

function getNum(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxNum = Math.max(maxNum, sum);
    }
  }
  return maxNum;
}

//console.log(getNum([-2,1,-3,4,-1,2,1,-5,4]));