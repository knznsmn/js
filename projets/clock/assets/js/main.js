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
    const hands = {
        hour: document.querySelector('.hour'),
        mins: document.querySelector('.minute'),
        secs: document.querySelector('.seconds'),
    }
    const now = new Date();
    const time = {
        hour: now.getHours(),
        mins: now.getMinutes(),
        secs: now.getSeconds(),
    }
    
    hands[secs].style.rotation = 
}

// MAIN()
Footer();