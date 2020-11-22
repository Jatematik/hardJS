'use strict';

const ul = document.createElement('ul');
const li = document.createElement('li');
const date = new Date();
const weekDay = date.getDay();
ul.style.cssText = `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 26px;
font-family: sans-serif;
list-style-type: none;
margin: 0;
padding: 0;
text-align: center;
`;
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

document.body.appendChild(ul);
for (let i = 0; i < 7; i++) {
  const cloneLi = li.cloneNode();
  cloneLi.style.cssText = `margin: 5px 0;`;
  ul.append(cloneLi);
  cloneLi.textContent = week[i];
}

const cloneLi = document.querySelectorAll('li');

cloneLi.forEach((item, index) => {
    if (index === 5 || index === 6) {
      item.style.fontStyle = 'italic';
    }
    if (weekDay - 1 === index) {
      item.style.fontWeight = 'bold';
    } else if (index === 6 && weekDay === 0) {
      item.style.fontWeight = 'bold';
    }
});