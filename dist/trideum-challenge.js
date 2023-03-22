"use strict";
(() => {
  // src/utils.ts
  function getIntOrDefault(inputStr, defaultVal) {
    let validatedNumb = parseInt(inputStr);
    if (Number.isNaN(validatedNumb)) {
      validatedNumb = defaultVal;
    }
    return validatedNumb;
  }
  function getStrOrDefault(inputStr, defaultVal) {
    if (inputStr === "") {
      inputStr = defaultVal;
    }
    return inputStr;
  }
  function validNumericInputs(inputs) {
    for (let index = 0; index < inputs.length; index++) {
      if (inputs[index] !== "" && (!Number.isInteger(+inputs[index]) || Number(inputs[index]) < 1)) {
        return false;
      }
    }
    return true;
  }

  // src/fizzbuzz.ts
  function fizzbuzz(formData) {
    const values = [...formData.values()];
    let fizzBuzzInputVal = values[0].toString();
    let fizzBuzzDiv1Val = values[1].toString();
    let fizzBuzzDiv2Val = values[2].toString();
    let fizzBuzzPhr1Val = values[3].toString();
    let fizzBuzzPhr2Val = values[4].toString();
    let outputStr = fizzbuzzMain(fizzBuzzInputVal, fizzBuzzDiv1Val, fizzBuzzDiv2Val, fizzBuzzPhr1Val, fizzBuzzPhr2Val);
    return outputStr;
  }
  function fizzbuzzMain(input, divisor1, divisor2, str1, str2) {
    let errorstr, phrase1, phrase2;
    let x, div1, div2;
    [x, div1, div2, phrase1, phrase2, errorstr] = fizzbuzzPreprocess(input, divisor1, divisor2, str1, str2);
    if (errorstr !== "") {
      return "Error: " + errorstr;
    }
    let outputArr = fizzbuzzProcessData(x, div1, div2, phrase1, phrase2);
    return outputArr.join(", ");
  }
  function fizzbuzzPreprocess(input, divisor1, divisor2, str1, str2) {
    let errorstr = "", phrase1 = str1, phrase2 = str2;
    let x, div1, div2;
    x = Number(input);
    if (input === "") {
      errorstr += "Invalid input. Input is required. ";
    }
    if (!validNumericInputs([input, divisor1, divisor2])) {
      errorstr += "Invalid input(s). All inputs must be positive integers. ";
    }
    div1 = getIntOrDefault(divisor1, 3);
    div2 = getIntOrDefault(divisor2, 5);
    phrase1 = getStrOrDefault(phrase1, "fizz");
    phrase2 = getStrOrDefault(phrase2, "buzz");
    return [x, div1, div2, phrase1, phrase2, errorstr];
  }
  function fizzbuzzProcessData(input, divisor1, divisor2, str1, str2) {
    let outputArr = ["0"];
    if (input === 0) {
      return outputArr;
    }
    for (let index = 1; index <= input; index++) {
      outputArr.push(fizzbuzzIndividual(index, divisor1, divisor2, str1, str2));
    }
    return outputArr;
  }
  function fizzbuzzIndividual(input, divisor1, divisor2, str1, str2) {
    let divisibleByDivisor1;
    let divisibleByDivisor2;
    let output = "";
    divisibleByDivisor1 = !(input % divisor1);
    divisibleByDivisor2 = !(input % divisor2);
    if (divisibleByDivisor1) {
      output += str1;
    }
    if (divisibleByDivisor2) {
      output += str2;
    }
    if (!divisibleByDivisor1 && !divisibleByDivisor2) {
      output = input.toString();
    }
    return output;
  }

  // src/fibonacci.ts
  function fibonacci(formData) {
    const values = [...formData.values()];
    let fibonacciInputX = values[0].toString();
    let fibonacciInputY = values[1].toString();
    let fibonacciInputZ = values[2].toString();
    let outputStr = fibonacciMain(fibonacciInputX, fibonacciInputY, fibonacciInputZ);
    return outputStr;
  }
  function fibonacciMain(x, y, z) {
    let errorstr;
    let xinput, yinput, zinput;
    [xinput, yinput, zinput, errorstr] = fibonacciPreprocess(x, y, z);
    if (errorstr !== "") {
      return "Error: " + errorstr;
    }
    let dataArr = fibonacciProcessData(xinput, yinput, zinput);
    return dataArr.join(", ");
  }
  function fibonacciPreprocess(x, y, z) {
    let errorstr = "";
    if (x === "") {
      errorstr += "Invalid input. Input X is required. ";
    }
    if (!validNumericInputs([x, y, z])) {
      errorstr += "Invalid input(s). All inputs must be positive integers. ";
    }
    let xinput = Number(x);
    let yinput = getIntOrDefault(y, 1);
    let zinput = getIntOrDefault(z, 2);
    return [xinput, yinput, zinput, errorstr];
  }
  function fibonacciProcessData(x, y, z) {
    let dataArr = [];
    for (let index = 1; index <= x; index++) {
      if (index - y <= 0 || index - z <= 0) {
        dataArr.push(1);
      } else {
        dataArr.push(dataArr[index - y - 1] + dataArr[index - z - 1]);
      }
    }
    return dataArr;
  }

  // src/combo.ts
  function comboChallenge(formData) {
    const values = [...formData.values()];
    let fizzBuzzDiv1Val = values[0].toString();
    let fizzBuzzDiv2Val = values[1].toString();
    let fizzBuzzPhr1Val = values[2].toString();
    let fizzBuzzPhr2Val = values[3].toString();
    let fibonacciInputX = values[4].toString();
    let fibonacciInputY = values[5].toString();
    let fibonacciInputZ = values[6].toString();
    let outputStr = comboChallengeMain(fibonacciInputX, fibonacciInputY, fibonacciInputZ, fizzBuzzDiv1Val, fizzBuzzDiv2Val, fizzBuzzPhr1Val, fizzBuzzPhr2Val);
    return outputStr;
  }
  function comboChallengeMain(x, y, z, divisor1, divisor2, phrase1, phrase2) {
    let errorstr, errorstr2, phr1, phr2;
    let xinput, yinput, zinput, div1, div2;
    [xinput, div1, div2, phr1, phr2, errorstr] = fizzbuzzPreprocess("2", divisor1, divisor2, phrase1, phrase2);
    [xinput, yinput, zinput, errorstr2] = fibonacciPreprocess(x, y, z);
    if (errorstr !== "" || errorstr2 !== "") {
      return "Error: " + errorstr + errorstr2;
    }
    let fibArr = fibonacciProcessData(xinput, yinput, zinput);
    let fizzBuzzedArr = [];
    for (let index = 0; index < fibArr.length; index++) {
      let tmp = fizzbuzzIndividual(fibArr[index], div1, div2, phr1, phr2);
      fizzBuzzedArr[index] = tmp;
    }
    return fizzBuzzedArr.join(", ");
  }

  // src/index.ts
  var submitBtn = document.querySelector("#submit-btn");
  var fizzBuzzForm = document.querySelector("#fizzbuzz-form");
  var fibonacciForm = document.querySelector("#fibonacci-form");
  var comboForm = document.querySelector("#combo-form");
  btnListenerForEachChallenge(submitBtn, fizzBuzzForm, fizzbuzz);
  btnListenerForEachChallenge(submitBtn, fibonacciForm, fibonacci);
  btnListenerForEachChallenge(submitBtn, comboForm, comboChallenge);
  function btnListenerForEachChallenge(btn, form, processData) {
    if (btn !== null && form !== null) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let fizzBuzzResultElement = document.getElementById("result");
        if (fizzBuzzResultElement === null) {
          return;
        }
        const formData = new FormData(form);
        let outputStr = processData(formData);
        fizzBuzzResultElement.innerHTML = outputStr;
      });
    }
  }
})();
