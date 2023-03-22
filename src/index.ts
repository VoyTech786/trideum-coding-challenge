import { fizzbuzz } from "./fizzbuzz";
import { fibonacci } from "./fibonacci";
import { comboChallenge } from "./combo";

// HTML Elements for all of the challenges
const submitBtn = document.querySelector('#submit-btn') as HTMLInputElement;

// Challenge-specific elements
const fizzBuzzForm = document.querySelector('#fizzbuzz-form') as HTMLFormElement;
const fibonacciForm = document.querySelector('#fibonacci-form') as HTMLFormElement;
const comboForm = document.querySelector('#combo-form') as HTMLFormElement;

// Listeners
btnListenerForEachChallenge(submitBtn, fizzBuzzForm, fizzbuzz)
btnListenerForEachChallenge(submitBtn, fibonacciForm, fibonacci)
btnListenerForEachChallenge(submitBtn, comboForm, comboChallenge)

function btnListenerForEachChallenge(btn: HTMLInputElement, form: HTMLFormElement, processData: (arg: FormData) => string): void {
  if (btn !== null && form !== null) {
    btn.addEventListener('click', (e) => {
      // Prevent the form from submitting
      e.preventDefault();
  
      // If we don't have a result element to update, then there is no reason to process the data
      let fizzBuzzResultElement: HTMLElement | null = document.getElementById("result");
      if (fizzBuzzResultElement === null) {
        return;
      }
  
      // Get Data
      const formData: FormData = new FormData(form);
  
      // Process Data
      let outputStr: string = processData(formData);
  
      // Update UI
      fizzBuzzResultElement.innerHTML = outputStr;
    });
  }
}