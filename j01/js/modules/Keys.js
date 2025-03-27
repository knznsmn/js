export function Keys() {

  const main = document.getElementsByTagName('main')[0];
  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

  keys.forEach((key, i) => {
    const button = document.createElement('button');
    button.classList = 'key';
    button.id = keys[i];
    button.textContent = keys[i];
    main.appendChild(button);
  })
}