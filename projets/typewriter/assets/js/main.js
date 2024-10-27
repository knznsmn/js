/**************************************************


	Written by Julius Cinco Cesar
	October 27, 2024


**************************************************/

// Elements Bindings
const display = document.querySelector(".display");


// Function Hall
function typewriter(str) {
  console.log(str.length);
  display.innerHTML = "";
  
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    setTimeout(function () {
      display.innerHTML += str[i];
    }, i * 1000);
  }
}
// main()

typewriter("Hello");