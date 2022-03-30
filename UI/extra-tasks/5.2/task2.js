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
            children: null,
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

function createList(title, list) {
  const ul = document.createElement('ul');
  for (let i = 0; i < list.length; i += 1) {
    const li = document.createElement(title);
    li.textContent = list[i].value;
    ul.appendChild(li);
    if (list[i].children !== null) {
      for (let j = 0; j < list[i].children.length; j += 1) {
        const ul1 = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.textContent = list[i].children[j].value;
        const calc = `calc(${100}% - ${10}%)`;
        li1.style.fontSize = calc;
        ul1.appendChild(li1);
        li.appendChild(ul1);
        if (list[i].children[j].children !== null) {
          for (let c = 0; c < list[i].children[j].children.length; c += 1) {
            const ul2 = document.createElement('ul');
            const li2 = document.createElement('li');
            li2.textContent = list[i].children[j].children[c].value;
            li2.style.fontSize = calc;
            ul2.appendChild(li2);
            li1.appendChild(ul2);
          }
        }
      }
    }
  }
  document.body.appendChild(ul);
}

createList('h2', nodeList);
