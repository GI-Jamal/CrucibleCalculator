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

// TODO: subtract
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

// TODO: multiply
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

// TODO: divide
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

// TODO: array numbers
function sumAll() {
  let numberString = document.getElementById("numberSeries").value;
  let numbers = parseInt(numberString);

  if (isNaN(numbers))
  {
    Swal.fire({
      icon: "error",
      heightAuto: false,
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });
  }
  
  else
  {
    
    let numberArray = numberString.split('');
    
    let numberSum = 0;

    for (i = 0; i < numberArray.length; i++)
    {
      let currentNumber = parseInt(numberArray[i]);
      numberSum += currentNumber;
    }

    results = document.getElementById('results');
    results.innerText = numberSum;
  }
}
