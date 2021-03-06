'use strict';

const wrapper = document.querySelector('.wrapper');
const box = document.querySelectorAll('.box');

wrapper.addEventListener('click', startGame);

function startGame(event) {
  if (event.target.classList.contains('box')) {
    event.target.innerHTML = `<svg class="cross">
    <line class="first" x1="7" y1="7" x2="45" y2="45" stroke="orange" stroke-width="5" stroke-linecap="round" />
    <line class="second" x1="45" y1="7" x2="7" y2="45" stroke="orange" stroke-width="5" stroke-linecap="round" />
    </svg>`;
    event.target.classList.add('x');
    for (let i = 0; i < box.length; i += 1) {
      if (box[i].innerHTML === '') {
        box[i].innerHTML = `<svg class="circle">
        <circle r="22" cx="27" cy="25" stroke="blue" stroke-width="4" fill="none" stroke-linecap="round" />
        </svg>`;
        box[i].classList.add('o');
      } else if (box[i].innerHTML !== '') {
        continue;
      }
      break;
    }
    checkTicTacToe();
  }
}

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
  ];
  for (let i = 0; i < array.length; i += 1) {
    if (box[array[i][0]].classList.contains('x') && box[array[i][1]].classList.contains('x') && box[array[i][2]].classList.contains('x')) {
      document.querySelector('.text').innerHTML = 'Вы выиграли';
      wrapper.removeEventListener('click', startGame);
    } else if (box[array[i][0]].classList.contains('o') && box[array[i][1]].classList.contains('o') && box[array[i][2]].classList.contains('o')) {
      document.querySelector('.text').innerHTML = 'Вы проиграли';
      wrapper.removeEventListener('click', startGame);
    }
  }
  if (box[0].innerHTML !== '' && box[1].innerHTML !== '' && box[2].innerHTML !== '' && box[3].innerHTML !== '' && box[4].innerHTML !== '' && box[5].innerHTML !== '' && box[6].innerHTML !== '' && box[7].innerHTML !== '' && box[8].innerHTML !== '') {
    if (document.querySelector('.text').innerHTML !== 'Вы выиграли' && document.querySelector('.text').innerHTML !== 'Вы проиграли') {
      document.querySelector('.text').innerHTML = 'Ничья';
      wrapper.removeEventListener('click', startGame);
    }
  }
}
