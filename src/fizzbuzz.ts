import { getIntOrDefault, getStrOrDefault, validNumericInputs } from "./utils";

export function fizzbuzz(formData: FormData): string {
  // Spread Operator Reference: https://www.javascripttutorial.net/es6/javascript-spread/
  const values: FormDataEntryValue[] = [...formData.values()];
  let fizzBuzzInputVal = values[0].toString();
  let fizzBuzzDiv1Val = values[1].toString();
  let fizzBuzzDiv2Val = values[2].toString();
  let fizzBuzzPhr1Val = values[3].toString();
  let fizzBuzzPhr2Val = values[4].toString();
  let outputStr: string = fizzbuzzMain(fizzBuzzInputVal, fizzBuzzDiv1Val, fizzBuzzDiv2Val, fizzBuzzPhr1Val, fizzBuzzPhr2Val);
  return outputStr;
}

export function fizzbuzzMain(input: string, divisor1: string, divisor2: string, str1: string, str2: string): string {
  // Validate inputs
  let errorstr: string, phrase1: string, phrase2: string;
  let x: number, div1: number, div2: number;
  [x, div1, div2, phrase1, phrase2, errorstr] = fizzbuzzPreprocess(input, divisor1, divisor2, str1, str2);
  if (errorstr !== "") {
    return "Error: " + errorstr;
  }

  // Process the data
  let outputArr: string[] = fizzbuzzProcessData(x, div1, div2, phrase1, phrase2);
  
  // Format the data in a separate step, in case the formatting changes
  return outputArr.join(", ");
}

export function fizzbuzzPreprocess(input: string, divisor1: string, divisor2: string, str1: string, str2: string): [number, number, number, string, string, string] {
  let errorstr: string = "", phrase1: string = str1, phrase2: string = str2;
  let x: number, div1: number, div2: number;
  x = Number(input);
  // Validate inputs
  if(input === "") {
    errorstr += "Invalid input. Input is required. "
  }
  if(!validNumericInputs([input,divisor1,divisor2])) {
    errorstr += "Invalid input(s). All inputs must be positive integers. "
  }
  // Set divisor defaults
  div1 = getIntOrDefault(divisor1, 3);
  div2 = getIntOrDefault(divisor2, 5);

  // Set replacement string defaults
  phrase1 = getStrOrDefault(phrase1, "fizz");
  phrase2 = getStrOrDefault(phrase2, "buzz");
  
  return [x, div1, div2, phrase1, phrase2, errorstr];
}

function fizzbuzzProcessData(input: number, divisor1: number, divisor2: number, str1: string, str2: string): string[] {
  // Initialize with the 0 case and check if input is 0
  let outputArr: string[] = ["0"];
  if (input === 0) {
    return outputArr;
  }
  for (let index = 1; index <= input; index++) {
    outputArr.push(fizzbuzzIndividual(index, divisor1, divisor2, str1, str2))
  }
  return outputArr;
}

export function fizzbuzzIndividual(input: number, divisor1: number, divisor2: number, str1: string, str2: string): string {
  let divisibleByDivisor1: boolean;
  let divisibleByDivisor2: boolean;
  let output: string = '';

  divisibleByDivisor1 = !(input % divisor1)
  divisibleByDivisor2 = !(input % divisor2)

  if(divisibleByDivisor1) {
    output += str1;
  }
  if(divisibleByDivisor2) {
    output += str2;
  }
  if(!divisibleByDivisor1 && !divisibleByDivisor2) {
    output = input.toString();
  }

  return output;
}
