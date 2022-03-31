/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
function createCalendar(id, year, month) {
  const elem = document.querySelector(id);
  elem.innerHTML = '<tr class="tr"><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
  const oneTr = document.createElement('TR');
  const twoTr = document.createElement('TR');
  const threeTr = document.createElement('TR');
  const fourTr = document.createElement('TR');
  const fiveTr = document.createElement('TR');
  const sixTr = document.createElement('TR');
  const date = new Date(year, month - 1);
  let newDay = date.getDay();
  let a = 1;
  if (newDay === 0) {
    newDay = 7;
    while (a < 7) {
      const one = document.createElement('TD');
      elem.appendChild(oneTr);
      oneTr.appendChild(one);
      a += 1;
    }
  }
  while (a < newDay) {
    const one = document.createElement('TD');
    elem.appendChild(oneTr);
    oneTr.appendChild(one);
    a += 1;
  }
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const daysInMonth = getDaysInMonth(month, year);
  let b = 1;
  newDay = date.getDay() + 1;
  let numOfDay;
  numOfDay = (9 - newDay);
  if (newDay === 1) {
    numOfDay = (2 - newDay);
  }
  const count = 7;
  while (b <= daysInMonth) {
    if (b <= numOfDay) {
      const one = document.createElement('TD');
      one.textContent = b;
      elem.appendChild(oneTr);
      oneTr.appendChild(one);
    } else if (b > numOfDay && b <= (numOfDay + count)) {
      const two = document.createElement('TD');
      two.textContent = b;
      elem.appendChild(twoTr);
      twoTr.appendChild(two);
    } else if (b > (numOfDay + count) && b <= (numOfDay + count * 2)) {
      const three = document.createElement('TD');
      three.textContent = b;
      elem.appendChild(threeTr);
      threeTr.appendChild(three);
    } else if (b > (numOfDay + count * 2) && b <= (numOfDay + count * 3)) {
      const four = document.createElement('TD');
      four.textContent = b;
      elem.appendChild(fourTr);
      fourTr.appendChild(four);
    } else if (b > (numOfDay + count * 3) && b <= (numOfDay + count * 4)) {
      const five = document.createElement('TD');
      five.textContent = b;
      elem.appendChild(fiveTr);
      fiveTr.appendChild(five);
    } else if (b > (numOfDay + count * 4)) {
      const six = document.createElement('TD');
      six.textContent = b;
      elem.appendChild(sixTr);
      sixTr.appendChild(six);
    }
    b += 1;
  }
}

createCalendar('table', 2022, 12);
