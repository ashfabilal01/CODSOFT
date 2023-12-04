let expression = "";
const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent == '=') {
      expression = eval(expression);
      display.value = expression;
    } else if (button.textContent == 'AC') {
      expression = "";
      display.value = expression;
    } else if (button.textContent == 'Del') {
      expression = expression.slice(0, -1); // Removes the last character
      display.value = expression;
    } else if (button.textContent == '%') {
      expression = eval(expression) / 100;
      display.value = expression;
    } else {
      expression = expression + button.textContent;
      display.value = expression;
    }
  })
});