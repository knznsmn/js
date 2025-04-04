import { main } from "./Main.js";
export function Keys() {

  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const article = document.createElement('article');
  main.appendChild(article);

  keys.forEach((key, i) => {
    const button = document.createElement('button');
    button.classList = 'key';
    button.id = keys[i];
    button.textContent = keys[i];
    article.appendChild(button);
  })
}