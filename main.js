import { setupCounter } from './counter.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>¡Hola mundo! Soy Rafael y Urzeda </h1>
`;


setupCounter(document.querySelector('#counter'))
