/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
function createCalendar(year, month) {
  const oneTr = document.querySelector('#oneTR');
  const elem = document.querySelector('#table');
  const one = document.querySelector('#one');
  const one1 = document.querySelector('#one1');
  const two = document.querySelector('#two');
  const two1 = document.querySelector('#two1');
  const three = document.querySelector('#three');
  const three1 = document.querySelector('#three1');
  const four = document.querySelector('#four');
  const four1 = document.querySelector('#four1');
  const five = document.querySelector('#five');
  const five1 = document.querySelector('#five1');
  const six = document.querySelector('#six');
  const six1 = document.querySelector('#six1');
  const zero = document.querySelector('#zero');
  const date = new Date(year, month);
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const arr = [];
  let daysInMonth = getDaysInMonth(month, year);
  const copyDaysInMonth = daysInMonth;
  let i = 1;
  console.log(daysInMonth);
  while (i <= copyDaysInMonth) {
    const dateOfWeek = new Date(year, month, daysInMonth);
    const dayOfWeek = dateOfWeek.getDay(i);
    class NumberOfDate {
      constructor(i, dayOfWeek) {
        this.i = i;
        this.dayOfWeek = dayOfWeek;
      }
    }
    const numberOfDate = new NumberOfDate(i, dayOfWeek);
    console.log(numberOfDate);
    arr.push(numberOfDate);
    i += 1;
    daysInMonth += 1;
  }
  const arr1 = arr.slice(0, 7);
  console.log(arr1);
  for (let j = 0; j < arr1.length; j += 1) {
    if (arr1[j].dayOfWeek === 0) {
      zero.textContent = arr1[j].i;
      one1.textContent = arr1[j+1].i;
      two1.textContent = arr1[j+2].i;
      three1.textContent = arr1[j+3].i;
      four1.textContent = arr1[j+4].i;
      five1.textContent = arr1[j+5].i;
      six1.textContent = arr1[j+6].i;
    }
    if (arr1[0].dayOfWeek === 1) {
      one.textContent = arr1[j].i;
      two.textContent = arr1[j+1].i;
      three.textContent = arr1[j+2].i;
      four.textContent = arr1[j+3].i;
      five.textContent = arr1[j+4].i;
      six.textContent = arr1[j+5].i;
      zero.textContent = arr1[j+6].i;
    }


    }
    
  }

  // const y = document.createElement("TR");
  // y.setAttribute("id", "myTr");
  // document.getElementById("table").appendChild(y);

  // const z = document.createElement("TD");
  // const t = document.createTextNode("cell");
  // z.appendChild(t);
  // document.getElementById("myTr").appendChild(z);

createCalendar(2022, 3);


// for (let j = 0; j < arr.length / 8; j += 1) {
//   if (arr[0].dayOfWeek === 0) {
//     if (arr[j].dayOfWeek === 0) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 1) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 2) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 3) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 1) {
//     if (arr[j].dayOfWeek === 1) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 2) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 3) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 2) {
//     if (arr[j].dayOfWeek === 2) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 3) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 5) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 3) {
//     if (arr[j].dayOfWeek === 3) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 5) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 6) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 4) {
//     if (arr[j].dayOfWeek === 4) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 4) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 5) {
//     if (arr[j].dayOfWeek === 5) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 5) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 6) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 0) {
//       three1.textContent = arr[j].i;
//     }
//   }
//   if (arr[0].dayOfWeek === 6) {
//     if (arr[j].dayOfWeek === 6) {
//       zero.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 0) {
//       one1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 1) {
//       two1.textContent = arr[j].i;
//     }
//     if (arr[j].dayOfWeek === 2) {
//       three1.textContent = arr[j].i;
//     }
//   }
  
  
// }
// const arr1 = arr.slice(4,11)
// console.log(arr1)
// for (let j = 0; j < arr1.length; j += 1) {
//   if (arr1[0].dayOfWeek === 4) {
//   if (arr1[j].dayOfWeek === 4) {
//     four1.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 5) {
//     console.log(arr1[j].i)
//     five1.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 6) {
//     six1.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 0) {
//     zero1.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 1) {
//     one2.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 2) {
//     two2.textContent = arr1[j].i;
//   }
//   if (arr1[j].dayOfWeek === 3) {
//     three2.textContent = arr1[j].i;
//   }
// }
// }
// const arr2 = arr.slice(11,18)
// console.log(arr2)
// for (let j = 0; j < arr2.length; j += 1) {
//   if (arr2[0].dayOfWeek === 4) {
//   if (arr2[j].dayOfWeek === 4) {
//     four2.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 5) {
//     five2.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 6) {
//     six2.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 0) {
//     zero2.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 1) {
//     one3.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 2) {
//     two3.textContent = arr2[j].i;
//   }
//   if (arr2[j].dayOfWeek === 3) {
//     three3.textContent = arr2[j].i;
//   }
// }
// }
// const arr3 = arr.slice(18,25)
// console.log(arr3)
// for (let j = 0; j < arr3.length; j += 1) {
//   if (arr3[0].dayOfWeek === 4) {
//   if (arr3[j].dayOfWeek === 4) {
//     four3.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 5) {
//     five3.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 6) {
//     six3.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 0) {
//     zero3.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 1) {
//     one4.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 2) {
//     two4.textContent = arr3[j].i;
//   }
//   if (arr3[j].dayOfWeek === 3) {
//     three4.textContent = arr3[j].i;
//   }
// }
// }
// const arr4 = arr.slice(25,31)
// console.log(arr4)
// for (let j = 0; j < arr4.length; j += 1) {
//   if (arr4[0].dayOfWeek === 4) {
//   if (arr4[j].dayOfWeek === 4) {
//     four4.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 5) {
//     five4.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 6) {
//     six4.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 0) {
//     zero4.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 1) {
//     one5.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 2) {
//     two5.textContent = arr4[j].i;
//   }
//   if (arr4[j].dayOfWeek === 3) {
//     three5.textContent = arr4[j].i;
//   }
// }
// }