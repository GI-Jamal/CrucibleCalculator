function add(num1, num2)
{
  let value1 = document.getElementById("firstNumber").value;
  let value2 = document.getElementById("secondNumber").value;

  let number1 = parseFloat(value1);
  let number2 = parseFloat(value2);

  if (isNaN(number1) || isNaN(number2))
  {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter valid numbers for the start and end values",
      backdrop: "false",
    });

  } 
  
  else {
    let number3 = number1 + number2;

    let results = document.getElementById("results");

    results.innerHTML = number3;
  }
}
