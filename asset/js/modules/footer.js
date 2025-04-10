export function Footer() {

  const ans = new Date().getFullYear();
  const footer = document.getElementsByTagName('footer')[0];
  const credit = document.createElement('p');
  credit.innerHTML = `&copy; ${ans} knznsmn. All rights reserved.`;
  footer.appendChild(credit);
  console.log("This is footer.");
}