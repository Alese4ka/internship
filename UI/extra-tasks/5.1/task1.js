'use strict';
function createCalendar(year, month) {
  const elem = document.querySelector('#table');
  const date = new Date(year, month);
  const getDaysInMonth = (month,year) => {
    return new Date(year, month, 0).getDate();
   }
  const arr = []
  let d = getDaysInMonth(month, year)
  let c = d;
  let i = 1;
  console.log(d)
  while(i <= c) {
    let dat = new Date(year, month, d);
    let dayOfWeek = dat.getDay(i);
    arr.push(dayOfWeek)
    i++
    d--
  }
  console.log(arr)
  // const y = document.createElement("TR");
  // y.setAttribute("id", "myTr");
  // document.getElementById("table").appendChild(y);

  // const z = document.createElement("TD");
  // const t = document.createTextNode("cell");
  // z.appendChild(t);
  // document.getElementById("myTr").appendChild(z);
}
createCalendar(2022, 2)