import { fibonacciPreprocess, fibonacciProcessData } from "./fibonacci";
import { fizzbuzzPreprocess, fizzbuzzIndividual } from "./fizzbuzz";

export function comboChallenge(formData: FormData): string {
  // Spread Operator Reference: https://www.javascripttutorial.net/es6/javascript-spread/
  const values: FormDataEntryValue[] = [...formData.values()];
  let fizzBuzzDiv1Val = values[0].toString();
  let fizzBuzzDiv2Val = values[1].toString();
  let fizzBuzzPhr1Val = values[2].toString();
  let fizzBuzzPhr2Val = values[3].toString();
  let fibonacciInputX = values[4].toString();
  let fibonacciInputY = values[5].toString();
  let fibonacciInputZ = values[6].toString();
  let outputStr: string = comboChallengeMain(fibonacciInputX, fibonacciInputY, fibonacciInputZ, fizzBuzzDiv1Val, fizzBuzzDiv2Val, fizzBuzzPhr1Val, fizzBuzzPhr2Val);
  return outputStr;
}

export function comboChallengeMain(x: string, y: string, z: string, divisor1: string, divisor2: string, phrase1: string, phrase2: string): string {
  // Validate the data
  let errorstr: string, errorstr2: string, phr1: string, phr2: string;
  let xinput: number, yinput: number, zinput: number, div1: number, div2: number;
  // Note: passing "2" instead of x into fizzbuzzPreprocess, so that we do not "double-report" if there is a validation error
  [xinput, div1, div2, phr1, phr2, errorstr] = fizzbuzzPreprocess("2", divisor1, divisor2, phrase1, phrase2);
  [xinput, yinput, zinput, errorstr2] = fibonacciPreprocess(x, y, z);
  if (errorstr !== "" || errorstr2 !== "") {
    return "Error: " + errorstr + errorstr2;
  }
  
  // Get the fibonacci array
  let fibArr: number[] = fibonacciProcessData(xinput,yinput,zinput);

  // Process the fizzbuzz transformtions
  let fizzBuzzedArr: string[] = [];
  for (let index = 0; index < fibArr.length; index++) {
    let tmp: string = fizzbuzzIndividual(fibArr[index], div1, div2, phr1, phr2); 
    fizzBuzzedArr[index]= tmp;
  }
  
  // Format the data
  return fizzBuzzedArr.join(", ");
}