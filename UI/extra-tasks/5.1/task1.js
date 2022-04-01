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
  let counter = 1;
  if (newDay === 0) {
    newDay = 7;
    while (counter < 7) {
      const one = document.createElement('TD');
      elem.appendChild(oneTr);
      oneTr.appendChild(one);
      counter += 1;
    }
  }
  while (counter < newDay) {
    const one = document.createElement('TD');
    elem.appendChild(oneTr);
    oneTr.appendChild(one);
    counter += 1;
  }
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  const daysInMonth = getDaysInMonth(month, year);
  newDay = date.getDay() + 1;
  let numOfDay;
  numOfDay = (9 - newDay);
  if (newDay === 1) {
    numOfDay = (2 - newDay);
  }
  const dayOfWeek = 7;
  let cell;
  let a = 1;
  while (a <= daysInMonth) {
    if (a <= numOfDay) {
      const one = document.createElement('TD');
      one.textContent = a;
      elem.appendChild(oneTr);
      oneTr.appendChild(one);
    } else if (a > numOfDay && a <= (numOfDay + dayOfWeek)) {
      const two = document.createElement('TD');
      two.textContent = a;
      elem.appendChild(twoTr);
      twoTr.appendChild(two);
    } else if (a > (numOfDay + dayOfWeek) && a <= (numOfDay + dayOfWeek * 2)) {
      const three = document.createElement('TD');
      three.textContent = a;
      elem.appendChild(threeTr);
      threeTr.appendChild(three);
    } else if (a > (numOfDay + dayOfWeek * 2) && a <= (numOfDay + dayOfWeek * 3)) {
      const four = document.createElement('TD');
      four.textContent = a;
      elem.appendChild(fourTr);
      fourTr.appendChild(four);
    } else if (a > (numOfDay + dayOfWeek * 3) && a <= (numOfDay + dayOfWeek * 4)) {
      const five = document.createElement('TD');
      five.textContent = a;
      elem.appendChild(fiveTr);
      fiveTr.appendChild(five);
    } else if (a > (numOfDay + dayOfWeek * 4)) {
      const six = document.createElement('TD');
      six.textContent = a;
      elem.appendChild(sixTr);
      sixTr.appendChild(six);
      cell = 1;
    }
    a += 1;
  }
  const searchLastDaY = new Date(year, month);
  let lastDay = searchLastDaY.getDay() - 1;
  while (lastDay < 7) {
    if (cell === 1) {
      const six = document.createElement('TD');
      six.textContent = '';
      elem.appendChild(sixTr);
      sixTr.appendChild(six);
    } else {
      const five = document.createElement('TD');
      five.textContent = '';
      elem.appendChild(fiveTr);
      fiveTr.appendChild(five);
    }
    lastDay += 1;
  }
}

createCalendar('table', 2002, 2);
