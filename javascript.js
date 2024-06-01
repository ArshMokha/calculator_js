let firstDigit = null;
let secondDigit = null;
let operator = null;
let displayArea = "";

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear");
const displayContainer = document.querySelector(".display-container");

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    displayArea += digitButton.textContent;
    displayContent(displayArea);
  })
})

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    const selectedOperator = operatorButton.textContent;

    if(!displayArea && !operator) {
      displayContent("Please Select a Digit");
      return;
    }
    
    if (!firstDigit) {
      firstDigit = +displayArea;
      operator = selectedOperator;
      displayArea = ""
      displayContent(displayArea);
    } else if (!operator) {
      if (selectedOperator != "=") {
        operator = selectedOperator;
      }
    } else if (!secondDigit) {
      if (selectedOperator != "=") {
        secondDigit = +displayArea;
        firstDigit = operate(firstDigit, operator, secondDigit);
        operator = selectedOperator;
        secondDigit = null;
        displayContent(firstDigit);
        display = "";
      } else {
        secondDigit = +displayArea;
        firstDigit = operate(firstDigit, operator, secondDigit);
        operator = null;
        secondDigit = null;
        displayContent(firstDigit);
        displayArea = "";
      }
    }
  })
})

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
  switch (operator) {
    case "+":
      return addDigits(firstDigit, secondDigit);
    case "-":
      return subtractDigits(firstDigit, secondDigit);
    case "/":
      return divideDigits(firstDigit, secondDigit);
    case "x":
      return multiplyDigits(firstDigit, secondDigit);
  }
}

clearButton.addEventListener("click", () => {
  clear();
})

function displayContent(displayValue) {
  displayContainer.textContent = displayValue;
}

function clear() {
  firstDigit = null;
  operator = null;
  secondDigit = null;
  displayArea = "";
  displayContent("clear");
}