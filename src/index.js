import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  const myIcon = new Image(600, 100);
  myIcon.src = Icon;

  // element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());