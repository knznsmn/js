// Bindings
const handHour = document.querySelector('.hour'),
      handMins = document.querySelector('.minute'),
      handSecs = document.querySelector('.second');
    const now = new Date();
			
// UI Components
function Footer() {
	const year = new Date().getFullYear();
	const footer = document.getElementsByTagName('footer')[0];
	const credit = document.createElement('p');
	credit.innerHTML = `<small>${year} knznsmn. All rights reversed.</small>`;
	footer.appendChild(credit);
}

// Processes
function timeKeeper() {
	const now = new Date();
	const time = {
        hour: now.getHours(),
        mins: now.getMinutes(),
        secs: now.getSeconds(),
	}
	console.log(time.secs);
	const degSecs = `rotate(${time.secs / 60 * 360}deg)`;
	const degMins = `rotate(${time.mins / 60 * 360}deg)`;
	const degHour = `rotate(${time.hour / 12 * 360}deg)`;
	handSecs.style.transform = degSecs;
	handMins.style.transform = degMins;
	handHour.style.transform = degHour;
}

// MAIN()
Footer();
setInterval(timeKeeper, 1000);