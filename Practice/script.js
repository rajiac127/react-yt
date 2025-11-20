const h1 = document.createElement('h1');
h1.innerHTML = 'Hello, World!';
document.body.appendChild(h1);

import a from './app.js';
import { name, age } from './app.js';

console.log(name);
console.log(age);

console.log(a);

