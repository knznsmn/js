// Bindings
const app = {
  // visage: document.querySelector('.calculatrice'),
  inline: document.querySelector('.inline'),
  result: document.querySelector('.result'),
  keypad: document.querySelector('.keypad'),
}

// Components
function calculate(op, numx, numy) {
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
app.inline.textContent = '';
app.result.textContent = '0';

// MAIN()
console.log("main()");

// Event Listeners
app.keypad.addEventListener('click', (e) => {
  console.log("keypad()");
  let resultTxt = app.result.textContent;
  let x, y, op;
  x = y = 0;
  
  if (resultTxt === '0') {
      resultTxt = '';
  }
  
  switch (e.target.className) {
    case 'number no0':
      resultTxt += '0';
      break;
    case 'number no1':
      resultTxt += '1';
      break;
    case 'number no2':
      resultTxt += '2';
      break;
    case 'number no3':
      resultTxt += '3';
      break;
    case 'number no4':
      resultTxt += '4';
      break;
    case 'number no5':
      resultTxt += '5';
      break;
    case 'number no6':
      resultTxt += '6';
      break;
    case 'number no7':
      resultTxt += '7';
      break;
    case 'number no8':
      resultTxt += '8';
      break;
    case 'number no9':
      resultTxt += '9';
      break;
    case 'operator add':
      x = resultTxt;
      op = '+';
      resultTxt = '0';
      break;
    case 'operator sub':
      x = resultTxt;
      op = '-';
      resultTxt = '0';
      break;
    case 'operator mul':
      x = resultTxt;
      op = '*';
      resultTxt = '0';
      break;
    case 'operator div':
      x = resultTxt;
      op = '/';
      resultTxt = '0';
      break;
    case 'operator eql':
      y = resultTxt;
      resultTxt = calculate(op, Number(x), Number(y));
      break;
    case 'function res':
      app.inline.textContent = '';
      resultTxt = '0';
      break;
    case 'function del':
      resultTxt = resultTxt.slice(0, -1);
      break;
    default:
      console.log("switch()");
  }
});