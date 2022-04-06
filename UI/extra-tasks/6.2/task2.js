/* eslint-disable no-undef */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const wrapper = document.querySelector('.wrapper');
const box = document.querySelectorAll('.box');

wrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('box')) {
    event.target.innerHTML = 'x';
    for (let i = 0; i < box.length; i += 1) {
      if (box[i].innerHTML === '') {
        box[i].innerHTML = 'o';
      } else if (box[i].innerHTML !== ''){
        continue;
      }
      break;
    }
  }
  checkTicTacToe();
});

function checkTicTacToe() {
  const array = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ]
  for (let i = 0; i < array.length; i += 1) {
    if (box[array[i][0]].innerHTML === 'x' && box[array[i][1]].innerHTML === 'x' && box[array[i][2]].innerHTML === 'x') {
      alert('Вы победили');
      box.forEach((item) => {item.innerHTML = ''});
    } else if (box[array[i][0]].innerHTML === 'o' && box[array[i][1]].innerHTML === 'o' && box[array[i][2]].innerHTML === 'o') {
      alert('Вы проиграли');
      box.forEach((item) => {item.innerHTML = ''});
    }
  }
}
