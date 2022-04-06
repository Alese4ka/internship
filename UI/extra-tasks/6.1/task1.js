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
  ul.setAttribute('class', 'ul')
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
  const blockLi = document.querySelectorAll('.li');
  const blockUls = document.getElementsByTagName('ul');
  for (let i = 0; i < blockLi.length; i += 1) {
    const a = `${i}`;
    blockLi[i].setAttribute('id', a);
  }
  for (let i = 0; i < blockUls.length; i += 1) {
    const a = `${`ul${i}`}`;
    blockUls[i].setAttribute('id', a);
  }
  const child = document.querySelector('#ul0');
  const c = child.childNodes;
  console.log(c);
  blockUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('li')) {
      for (let i = 0; i < c.length - 1; i += 1) {
        const h = event.target;
        if (c[i] === h && !c[i + 1].classList.contains('li')) {
          c[i + 1].classList.toggle('hide');
        } else if (c[i].classList.contains('ul')) {
          const child = document.querySelector('#ul1');
          const c = child.childNodes;
          for (let i = 0; i < c.length - 1; i += 1) {
            const h = event.target;
            if (c[i] === h && !c[i + 1].classList.contains('li')) {
              c[i + 1].classList.toggle('hide');
            } else if (c[i].classList.contains('ul')) {
              const child = document.querySelector('#ul2');
              const c = child.childNodes;
              for (let i = 0; i < c.length - 1; i += 1) {
                const h = event.target;
                if (c[i] === h && !c[i + 1].classList.contains('li')) {
                  c[i + 1].classList.toggle('hide');
                }
              }
            }
          }
        }
      }
    }
  });
}

createList('Список', nodeList);

// Клик вне текста заголовка (на пустом месте) ничего делать не должен

