export function getIntOrDefault(inputStr: string, defaultVal: number): number {
  let validatedNumb: number = parseInt(inputStr);
  if (Number.isNaN(validatedNumb)) {
    validatedNumb = defaultVal;
  }
  return validatedNumb;
}

export function getStrOrDefault(inputStr: string, defaultVal: string): string {
  if (inputStr === "") {
    inputStr = defaultVal;
  }
  return inputStr;
}

export function validNumericInputs(inputs: string[]): boolean {
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index] !== "" && (!Number.isInteger(+inputs[index]) || Number(inputs[index]) < 1)) {
      return false;
    }
  }
  return true;
}