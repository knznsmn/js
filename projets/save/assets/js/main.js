/**************************************************


	Written by Julius Cinco Cesar
	November 01, 2024


**************************************************/

// Elements Bindings
const footer = document.getElementsByTagName('footer')[0];

// Function Hall
function Footer() {
  const ans = new Date().getFullYear();
  const ped = document.createElement('p');
  ped.innerHTML = `<small>${ans} knznsmn. All rights reversed.</small>`;
  footer.appendChild(ped);
}

// Main()
Footer();

