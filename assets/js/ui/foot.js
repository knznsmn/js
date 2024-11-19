export function Foot() {
	
	const footer = document.createElement('footer');
	const year = new Date().getFullYear();
	footer.innerHTML =
    `
		  <small>
			  &copy; ${year} knznsmn. All rights reversed.
		  </small>
		`
	return footer;
}