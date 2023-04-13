function add(num1, num2) {
  let value1 = document.getElementById("firstNumber").value;
  let value2 = document.getElementById("secondNumber").value;

  let number1 = parseFloat(value1);
  let number2 = parseFloat(value2);

  if (isNaN(number1) || isNaN(number2)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let number3 = number1 + number2;

    let results = document.getElementById("results");

    results.innerText = number3;
  }
}

function subtract(num1, num2) {
  let value1 = document.getElementById("firstNumber").value;
  let value2 = document.getElementById("secondNumber").value;

  let number1 = parseFloat(value1);
  let number2 = parseFloat(value2);

  if (isNaN(number1) || isNaN(number2)) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      heightAuto: false,
      backdrop: "false",
    });
  } else {
    let number3 = number1 - number2;

    let results = document.getElementById("results");

    results.innerText = number3;
  }
}

function multiply(num1, num2) {
  let value1 = document.getElementById("firstNumber").value;
  let value2 = document.getElementById("secondNumber").value;

  let number1 = parseFloat(value1);
  let number2 = parseFloat(value2);

  if (isNaN(number1) || isNaN(number2)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let number3 = number1 * number2;

    let results = document.getElementById("results");

    results.innerText = number3;
  }
}

function divide(num1, num2) {
  let value1 = document.getElementById("firstNumber").value;
  let value2 = document.getElementById("secondNumber").value;

  let number1 = parseFloat(value1);
  let number2 = parseFloat(value2);
  let resultValue = 0;

  if (isNaN(number1) || isNaN(number2)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    if (number2 == 0) {
      resultValue = "Cannot divide by zero";
    } else {
      resultValue = number1 / number2;
    }
  }

  let resultsElement = document.getElementById("results");

  resultsElement.innerText = resultValue;
}

function sumAll() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberSum = 0;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      numberSum += currentNumber;
    }

    results = document.getElementById("results");
    results.innerText = numberSum;
  }
}

function multiplyAll() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberProduct = 1;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      numberProduct *= currentNumber;
    }

    results = document.getElementById("results");
    results.innerText = numberProduct;
  }
}

function minimum() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let minimum = parseInt(numberArray[0]);

    for (i = 1; i < numberArray.length; i++) {
      let currentNumber = parseInt(numberArray[i]);
      if (currentNumber < minimum) {
        minimum = currentNumber;
      }
    }

    results = document.getElementById("results");
    results.innerText = minimum;
  }
}

function maximum() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseInt(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let maximum = parseInt(numberArray[0]);

    for (i = 1; i < numberArray.length; i++) {
      let currentNumber = parseInt(numberArray[i]);
      if (currentNumber > maximum) {
        maximum = currentNumber;
      }
    }

    results = document.getElementById("results");
    results.innerText = maximum;
  }
}

function average() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseInt(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberSum = 0;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseInt(numberArray[i]);
      numberSum += currentNumber;
    }

    results = document.getElementById("results");
    results.innerText = numberSum / numberArray.length;
  }
}


function numberInput()
{
  let input = document.activeElement;
  let results = document.getElementById("resultsArea");

  if (results.innerText == '0')
  {
    results.innerText = input.innerText
  }

  else
  {
    results.innerText += input.innerText
  }
}

function numberInputTest() {
  let input = document.activeElement;
  let results = document.getElementById("resultsArea");
  let operator = document.getElementById('operatorArea');
  let previousInput = '0';


  if (results.innerText == '0' && operator.innerText == '')
  {
    results.innerText = input.innerText;
  }

  else
  {
    if (result.innerText !='0' && operator.innerText != '')
    {
      previousInput = results.innerText;
      clearScreen();
      results.innerText = input.innerText;
    }

    else if (results.innerText != '0' && operator.innerText == '')
    {
      results.innerText += input.innerText;
    }
  }
}

function calcSumAll() {
  let numberString = document.getElementById("resultsArea").innerText;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberSum = 0;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      numberSum += currentNumber;
    }

    let operator = document.getElementById("operatorArea");
    operator.innerText = '+';
    
    results = document.getElementById("resultsArea");
    results.innerText = numberSum;
  }
}

function calcMultiplyAll() {
  let numberString = document.getElementById("resultsArea").innerText;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberProduct = 1;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      numberProduct *= currentNumber;
    }

    let operator = document.getElementById("operatorArea");
    operator.innerText = "x";

    results = document.getElementById("resultsArea");
    results.innerText = numberProduct;
  }
}

function calcMinimum() {
  let numberString = document.getElementById("resultsArea").innerText;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let minimum = parseFloat(numberArray[0]);

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      if (currentNumber < minimum) {
        minimum = currentNumber;
      }
    }

    results = document.getElementById("resultsArea");
    results.innerText = minimum;
  }

    let operator = document.getElementById("operatorArea");
    operator.innerText = "MIN";
}

function calcMaximum() {
  let numberString = document.getElementById("resultsArea").innerText;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let maximum = parseFloat(numberArray[0]);

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      if (currentNumber > maximum) {
        maximum = currentNumber;
      }
    }

    results = document.getElementById("resultsArea");
    results.innerText = maximum;
  }

    let operator = document.getElementById("operatorArea");
    operator.innerText = "MAX";
}

function calcAverage() {
  let numberString = document.getElementById("resultsArea").innerText;
  let numbers = parseFloat(numberString);

  if (isNaN(numbers)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } else {
    let numberArray = numberString.split("");

    let numberSum = 0;

    for (i = 0; i < numberArray.length; i++) {
      let currentNumber = parseFloat(numberArray[i]);
      numberSum += currentNumber;
    }

    results = document.getElementById("resultsArea");
    results.innerText = numberSum / numberArray.length;
  }

    let operator = document.getElementById("operatorArea");
    operator.innerText = "AVG";
}

function clearScreen() {
  let results = document.getElementById("resultsArea");
  let operator = document.getElementById("operatorArea");
  results.innerText = "0";
  operator.innerText = '';
}

function calcAdd(previousNumber) {
  
  let results = document.getElementById('resultsArea');
  let operator = document.getElementById('operatorArea');
  operator.innerText = '+';

  let value1 = parseInt(previousNumber);
  let value2 = parseInt(results.innerText);

  if (isNaN(value1) || isNaN(value2)) {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  } 
  
  
  else {
    let value3 = value1 + value2;

    results.innerText = value3;
  }
}