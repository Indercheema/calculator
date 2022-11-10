'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

    Calculator
*/
let equalPressed = 0;
let buttonInput = document.querySelectorAll(".input-button");
let input = document.querySelector(".input");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
window.onload = () => {
  input.value = "";
};
//Access each class using forEach
buttonInput.forEach((button) => {
  button.addEventListener("click", () => {
    if (equalPressed == 1) {
      equalPressed = 0;
    }
    //display value of each button
    input.value += button.value;
  });
});
//Output when clicked on equal sign
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputVal = input.value;
    //evaluate user's input
    let solution = eval(inputVal);
    //fixing decimal numbers
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
});
//Clear Input
clear.addEventListener("click", () => {
  input.value = "";
});

