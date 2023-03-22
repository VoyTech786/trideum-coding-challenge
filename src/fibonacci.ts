import { getIntOrDefault, validNumericInputs } from "./utils";

export function fibonacci(formData: FormData): string {
  // Spread Operator Reference: https://www.javascripttutorial.net/es6/javascript-spread/
  const values: FormDataEntryValue[] = [...formData.values()];
  let fibonacciInputX = values[0].toString();
  let fibonacciInputY = values[1].toString();
  let fibonacciInputZ = values[2].toString();
  let outputStr: string = fibonacciMain(fibonacciInputX, fibonacciInputY, fibonacciInputZ);
  return outputStr;
}

export function fibonacciMain(x: string, y: string, z: string): string {
  // Validate inputs
  let errorstr: string;
  let xinput: number, yinput: number, zinput: number;
  [xinput, yinput, zinput, errorstr] = fibonacciPreprocess(x, y, z);
  if (errorstr !== "") {
    return "Error: " + errorstr;
  }

  // Process the data
  let dataArr: number[] = fibonacciProcessData(xinput,yinput,zinput);
  // Format the data
  return dataArr.join(", ");
}

export function fibonacciPreprocess(x: string, y: string, z: string): [number, number, number, string] {
  let errorstr: string = "";

  // Validate
  if(x === "") {
    errorstr += "Invalid input. Input X is required. "
  }
  if(!validNumericInputs([x,y,z])) {
    errorstr += "Invalid input(s). All inputs must be positive integers. "
  }
  
  // Get values or defaults
  let xinput: number = Number(x);
  let yinput: number = getIntOrDefault(y, 1);
  let zinput: number = getIntOrDefault(z, 2);
  
  return [xinput, yinput, zinput, errorstr];
}

export function fibonacciProcessData(x: number, y: number, z: number): number[] {
  let dataArr: number[] = [];
  for (let index = 1; index <= x; index++) {
    if ((index - y <= 0) || (index - z <= 0)) {
      dataArr.push(1);
    }
    else {
      // Subtract 1 from (index - [y|z]) to account for array's starting at index 0
      dataArr.push(dataArr[index-y-1] + dataArr[index-z-1]); 
    }
  }
  
  return dataArr;
}