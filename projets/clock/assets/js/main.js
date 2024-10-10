// UI Components
function Footer() {
	const year = new Date().getFullYear();
	const footer = document.getElementsByTagName('footer')[0];
	const credit = document.createElement('p');
	credit.innerHTML = `<small>${year} knznsmn. All rights reversed.</small>`;
	footer.appendChild(credit);
}

// MAIN()
Footer();