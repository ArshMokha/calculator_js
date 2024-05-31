let firstDigit;
let operator;
let secondDigit;

let displayValue = "";

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

/* 
click any number of digits,
click an operator
click any number of digits
repeat or =
*/