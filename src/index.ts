import './style.css';
import { Rand } from './random';
import { getMessageFromTest1 } from './test1';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode');
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = "hello TS";
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {
    const r = new Rand();
    console.log(r.getNumber() + " ");
    getMessageFromTest1();
  };

  const Icon = require("./f.png");
  const myIcon = new Image(600, 500);
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());