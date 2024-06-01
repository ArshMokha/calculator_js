let firstDigit = null;
let operator = null;
let secondDigit = null;

let display = "";

function addDigits(firstDigit, secondDigit) {
  return firstDigit + secondDigit;
}

function subtractDigits(firstDigit, secondDigit) {
  return firstDigit - secondDigit;
}

function multiplyDigits(firstDigit, secondDigit) {
  return firstDigit * secondDigit;
}

function divideDigits(firstDigit, secondDigit) {
  return firstDigit / secondDigit;
}

function operate(firstDigit, operator, secondDigit) {
  let result;
  
  switch (operator) {
    case "+":
      result = addDigits(firstDigit, secondDigit);
      break;
    case "-":
      result = subtractDigits(firstDigit, secondDigit);
      break;
    case "/":
      result = divideDigits(firstDigit, secondDigit);
      break;
    case "x":
      result = multiplyDigits(firstDigit, secondDigit);
      break;
  }
  return result;
}

function displayContent(displayValue) {
  displayContainer.textContent = displayValue;
}

function clear() {
  firstDigit = null;
  operator = null;
  secondDigit = null;
  display = "";
  displayContent("clear");
}

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const displayContainer = document.querySelector(".display-container");

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    display += digitButton.textContent;
    displayContent(display);
  })
})

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    const selectedOperator = operatorButton.textContent;

    if(!display && !operator) {
      displayContent("Please Select a Digit");
      return;
    }

    if (!firstDigit) {
      firstDigit = +display;
      operator = selectedOperator;
      display = "";
      displayContent(operator);
    } else if (!secondDigit) {
      secondDigit = +display;
      firstDigit = operate(firstDigit, operator, secondDigit);
      secondDigit = null;
      display = "";
      displayContent(firstDigit);
      if (selectedOperator !== "=") {
        operator = selectedOperator;
      }
    }
  })
})

clearButton.addEventListener("click", () => {
  clear();
})