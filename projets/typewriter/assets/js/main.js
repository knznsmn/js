/**************************************************


	Written by Julius Cinco Cesar
	October 27, 2024


**************************************************/

// Elements Bindings
const display = document.querySelector(".display");


// Function Hall

function typewriter(str) {
  display.textContent = "";
    
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    setTimeout(function () {
      display.textContent += str[i];
    }, i * 250);
  };
}

function backspace(str) {
  
  display.textContent = str;
  for (let i = str.length; i > 0; i--) {
    setTimeout(function() {
      str = str.slice(0, -1);
      display.textContent;
    }, 250);
  }
}

// main()
let txt = "Hello, bitches!";

// typewriter("Hello, bitches!");
backspace(txt);