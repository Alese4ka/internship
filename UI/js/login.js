/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable no-undef */
'user strict';

const mainBtn = document.querySelector('.header__btn-main');
const regBtn = document.querySelector('.header__btn-reg');

mainBtn.addEventListener('click', () => {
  document.location.href = './index.html';
});

regBtn.addEventListener('click', () => {
  document.location.href = './logup.html';
});

function redirect() {
  const name = document.querySelector('.form__name');
  const userList = JSON.parse(localStorage.getItem('userList'));
  const nameVal = name.value;
  localStorage.setItem('currentUser', JSON.stringify(nameVal));
  if (userList.some((item) => item === nameVal)) {
    document.location.href = './index.html';
  } else {
    alert('Неверное имя');
  }
}
