// Bindings
const app = {
  // visage: document.querySelector('.calculatrice'),
  inline: document.querySelector('.inline'),
  result: document.querySelector('.result'),
  keypad: document.querySelector('.keypad'),
}

// Components
function calculate(op, numx, numy) {
  Number(numx);
  Number(numy);
  console.log(numx, numy)
  switch (op) {
    case '+':
      return numx + numy;
    case '-':
      return numx - numy;
    case '*':
      return numx * numy;
    case '/':
      return numx / numy;
  };
  console.log("calculate()");
}

// MAIN()
app.inline.textContent = '';
app.result.textContent = '0';

let x, y;
let op;
let state;
x = y = 0;
// Event Listeners
app.keypad.addEventListener('click', (e) => {
  state = false;
  
  if (app.result.textContent === '0') {
      app.result.textContent = '';
  }
  
  switch (e.target.className) {
    case 'number no0':
      app.result.textContent += '0';
      break;
    case 'number no1':
      app.result.textContent += '1';
      break;
    case 'number no2':
      app.result.textContent += '2';
      break;
    case 'number no3':
      app.result.textContent += '3';
      break;
    case 'number no4':
      app.result.textContent += '4';
      break;
    case 'number no5':
      app.result.textContent += '5';
      break;
    case 'number no6':
      app.result.textContent += '6';
      break;
    case 'number no7':
      app.result.textContent += '7';
      break;
    case 'number no8':
      app.result.textContent += '8';
      break;
    case 'number no9':
      app.result.textContent += '9';
      break;
    case 'operator add':
      x = app.result.textContent;
      app.inline.textContent += app.result.textContent + " + ";
      op = '+';
      app.result.textContent = '';
      break;
    case 'operator sub':
      x = app.result.textContent;
      app.inline.textContent += app.result.textContent + " - ";
      op = '-';
      app.result.textContent = '';
      break;
    case 'operator mul':
      x = app.result.textContent;
      app.inline.textContent += app.result.textContent + " x ";
      op = '*';
      app.result.textContent = '';
      break;
    case 'operator div':
      x = app.result.textContent;
      app.inline.textContent += app.result.textContent + " ÷ ";
      op = '/';
      app.result.textContent = '';
      break;
    case 'operator eql':
      if (!state) {
        y = app.result.textContent;
        app.inline.textContent += app.result.textContent + " = ";
        app.result.textContent = calculate(op, Number(x), Number(y));
        app.inline.textContent += app.result.textContent;
        state = false;
      }
      else {
        app.result.textContent = '0';
        state = true;
      }
      break;
    case 'function res':
      app.inline.textContent = '';
      app.result.textContent = '0';
      break;
    case 'function del':
      app.result.textContent = app.result.textContent === '' ? '0' : app.result.textContent.slice(0, -1);
      break;
    default:
      console.log("switch()");
  }
});