import './style.css';
import { Rand } from './random';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = "hello TS";
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = function() {
    const r = new Rand();
    console.log(r.getNumber());
  };

  const Icon = require("./f.png");
  const myIcon = new Image(600, 500);
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());