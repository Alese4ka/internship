/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable no-undef */
'user strict';

const mainBtn = document.querySelector('.header__btn-main');
const logBtn = document.querySelector('.header__btn-log');

mainBtn.addEventListener('click', () => {
  document.location.href = './index.html';
});

logBtn.addEventListener('click', () => {
  document.location.href = './login.html';
});

function redirect() {
  document.location.href = './index.html';
  const name = document.querySelector('.form__name');
  localStorage.setItem('currentUser', JSON.stringify(name.value));
  const userList = JSON.parse(localStorage.getItem('userList'));
  userList.push(name.value);
  localStorage.setItem('userList', JSON.stringify(userList));
}
