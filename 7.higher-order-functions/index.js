// HIGHER ORDER FUNCTIONS & CALLBACL FUNCTIONS

function sendMessage(message, callbackFunction) {
  return callbackFunction(message);
}

sendMessage("Hello Jibola", console.log);

// sendMessage - Higher Order Function
// callbackFunction - Callback function

sendMessage("Hello Boluwatife", alert);

// Referencing a function vs Calling a function
// console.log is different from console.log()

// sendMessage  - referencing a function
// sendMessage() - calling a function

// Example 1: Write a function that sends a message
function sendMessageWithConsole(message) {
  console.log(message);
}
sendMessageWithConsole("Hello Mary");

function sendMessageWithAlert(message) {
  alert(message);
}
sendMessageWithAlert("Hello Jennifer");

function sendMessageWithConfirm(message) {
  confirm(message);
}
sendMessageWithConfirm("Hello Bayo");

function sendMessageWithPrompt(message) {
  prompt(message);
}
sendMessageWithPrompt("Hello Joy");

// Simplifying solution using Higher-order functions & Callback functions
function sendMessageHOF(message, callbackFunction) {
  callbackFunction(message);
}

sendMessageHOF("Hello Joy", console.log);
sendMessageHOF("Hello Joy", alert);
sendMessageHOF("Hello Joy", confirm);
sendMessageHOF("Hello Joy", prompt);

//Example 2: Write a solution that calculates the area and the diameter of a circle given the radii [1,2,3] and returns the output for each radius in an array.

// area of a circle = PI * radius ** 2
// diameter of a circle = 2 * radius

function calculateArea(radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++) {
    let area = Math.PI * radii[i] ** 2; // make this operation a function
    result.push(area);
  }
  return result;
}
let arrayOfAreas = calculateArea([1, 2, 3]);
console.log(arrayOfAreas);

function calculateDiameter(radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++) {
    let diameter = 2 * radii[i]; // make this operation a function
    result.push(diameter);
  }
  return result;
}

let arrayOfDiameters = calculateDiameter([1, 2, 3]);
console.log(arrayOfDiameters);

// // calculate the circumference of the circle
// // Circumference - 2 * PI x r

function calculateCircumference(radii) {
  const result = [];
  for (let i = 0; i < radii.length; i++) {
    let circumference = 2 * Math.PI * radii[i]; // make this operation a function
    result.push(circumference);
  }
  return result;
}

let arrayOfCircumference = calculateCircumference([1, 2, 3]);
console.log(arrayOfCircumference);

// // Using HOF and Callbacks to solve the question above
console.log("DEMONSTRATION OF HIGHER ORDER FUNCTIONS & CALLBACK FUNCTIONS");

function area(radius) {
  let area = Math.PI * radius ** 2;
  return area;
}

function diameter(radius) {
  let diameter = 2 * radius;
  return diameter;
}

function circumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return circumference;
}

function circleOperation(radii, callbackFunction) {
  const result = [];
  for (let i = 0; i < radii.length; i++) {
    let operation = callbackFunction(radii[[i]]); // dynamic operation
    result.push(operation);
  }
  return result;
}

let areas = circleOperation([1, 2, 3], area);
console.log(areas);

let diameters = circleOperation([1, 2, 3], diameter);
console.log(diameters);

let circumferences = circleOperation([1, 2, 3], circumference);
console.log(circumferences);

// Array has in-built HOFs like .map(), .filter(), .reduce() and many more.
const usingMapToCalCDiameter = [1, 2, 3].map(diameter);
console.log(usingMapToCalCDiameter);

// setTimeout and setInterval

// Syntax - setTimeout(callbackFunction, time)
// callbackFunction - callback function that will be executed
// time - the time that must be elapsed before the callbackFunction is executed. This is writtten in milliseconds
// 1000 ms = 1 second

//Q: Log 'Hello Stutern Learners' after 10 seconds

function logMessage() {
  console.log("Hello Stutern Learners");
}
setTimeout(logMessage, 10000);

//OR
setTimeout(function () {
  console.log("Hello Stutern Learners");
}, 10000);

//OR
setTimeout(() => console.log("Hello Stutern Learners"), 10000);

//Q: Log 'Hello Stutern Learners' after every 2 seconds

// setInterval(callbackFunction, interval)
setInterval(() => console.log("Hello Stutern Learners"), 2000);

// Log 'Hello Stutern Learners' after every 2 seconds. Cancel operation after 20 seconds;
let timerId = setInterval(() => console.log("Hello Stutern Learners"), 2000);

setTimeout(function () {
  clearInterval(timerId);
  console.log("Interval has been terminated");
}, 20000);

clearTimeout(timerId);

// Closure example
function parentFunction(a) {
  return function childFunction(b) {
    return a + b;
  };
}

parentFunction(8);
// returns
// function childFunction(b) {
//   return 8 + b
// }

// parentFunction(8)(5);
// function childFunction(b) {
//   return 8 + b
// }

// childFunction(5) => 8 + 5 = 13

// Closure Example
function greet() {
  let name = "John";

  function displayName() {
    return "Hi " + name;
  }

  return displayName;
}

let greet1 = greet();
console.log(greet1);
console.log(greet1());

// Another closure example
function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const mult1 = multiply3(6);
//OR
const mult2 = calculate(3)(6);

console.log(mult1);
console.log(mult2);
