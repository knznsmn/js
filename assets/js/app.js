
import { Main } from './ui/main.js';
import { Head } from './ui/head.js';
import { Foot } from './ui/foot.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js running...');
  document.body.appendChild(Head());
	document.body.appendChild(Main());
	document.body.appendChild(Foot());
})



