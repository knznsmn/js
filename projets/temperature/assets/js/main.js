// Bindings
const fahr = document.getElementById('fahrenheit');
const cels = document.getElementById('celsius');

// UI Components

function Footer() {
	const footer = document.getElementsByTagName('footer')[0];
	const year = new Date().getFullYear();
	const credit = document.createElement('p');
	credit.innerHTML = `<small>${year} knznsmn. All rights reversed</small>`;
	footer.appendChild(credit);
}

// Processes
function convertUnit(unit, temp) {
	if (unit === "f")
		return (temp - 32) * (5 / 9);
	else if (unit === "c")
		return temp * 9 / 5 + 32;
	else
		console.log(`Argument passed: ${unit}.`);
}


// MAIN()
Footer();

// Event Listeners
fahr.addEventListener('change', (e) => {
	cels.value = convertUnit("f", fahr.value);
});
cels.addEventListener('change', (e) => {
	fahr.value = convertUnit("c", cels.value);
});