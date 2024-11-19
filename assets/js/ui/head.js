export function Head() {
  
	const nav = document.createElement('nav');
	nav.innerHTML =
		`
			<ul>
				<li><a href="/">Maison</a></li>
				<li><a href="/projects">Projets</a></li>
				<li><a href="/about">Parce Que</a></li>
			</ul>
		`
	return nav;
};
	
	