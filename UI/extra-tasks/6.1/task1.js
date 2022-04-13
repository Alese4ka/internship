'use strict';

const nodeList = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: [
              {
                value: 'Подпункт 2.2.1.',
                children: null,
              },
              {
                value: 'Подпункт 2.2.2.',
                children: null,
              },
            ],
          },
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      },
    ],
  },
  {
    value: 'Пункт 3.',
    children: null,
  },
];

function getList(list) {
  const ul = document.createElement('ul');
  list.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'li');
    li.textContent = item.value;
    ul.appendChild(li);
    const calc = `calc(${90}%)`;
    ul.style.fontSize = calc;
    if (item.children !== null) {
      ul.append(getList(item.children));
    }
  });
  return ul;
}

function createList(title, list) {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  document.body.appendChild(h2);
  const block = document.createElement('div');
  block.setAttribute('class', 'block');
  block.appendChild(getList(list));
  document.body.appendChild(block);
  const blockUl = document.querySelector('.block');
  blockUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('li')) {
      if (event.target.nextElementSibling === null) {
        return;
      }
      if (event.target.nextElementSibling.tagName === 'UL') {
        const containerUl = event.target.nextSibling.closest('ul');
        containerUl.classList.toggle('hide');
      }
    }
  });
}

createList('Список', nodeList);
