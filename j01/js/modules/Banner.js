import { main } from "./Main.js";
export function Banner() {

  const drum = document.createElement('img');
  drum.src = './assets/icons/logo.png';
  drum.alt = 'Drum Kit';
  main.appendChild(drum);
}