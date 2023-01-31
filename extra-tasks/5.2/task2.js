/* eslint-disable no-undef */
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
    li.textContent = item.value;
    ul.appendChild(li);
    const calc = `calc(${100}% - ${10}%)`;
    ul.style.fontSize = calc;
    if (item.children !== null) {
      ul.append(getList(item.children));
    }
  });
  document.body.appendChild(ul);
  return ul;
}

function createList(title, list) {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  document.body.appendChild(h2);
  getList(list);
}

createList('Список', nodeList);
