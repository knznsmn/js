const main      = document.getElementsByTagName('main')[0]; 
const article = document.createElement('article');
const section = document.createElement('section');

function padding(x) {
  return x <= 9 ? '0' : '';
}

section.classList = "date";
export function Clock() {

  // Genesis
  const date  = new Date();
  const now = {
      year: date.getFullYear(),
      moin: date.getMonth(),
      jour: date.getDay(),
      hour: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds()
  };

  section.innerText = `${padding(now.hour)}${now.hour}:${padding(now.mins)}${now.mins}:${padding(now.secs)}${now.secs}`;
    
  article.appendChild(section);
  main.appendChild(article);
}