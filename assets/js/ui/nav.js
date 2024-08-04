export function Nav() {
	const nav = document.createElement('nav');
	nav.innerHTML =
		`
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		`
	return nav;
};
	
	