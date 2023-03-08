//accessing the body element by id
let bodyElement = document.getElementById("container");
console.log(bodyElement);

let everyoneElement = document.getElementById("everyone");
console.log(everyoneElement);

// accessing element using query selector
let container = document.querySelector("#container");
// console.log(container)

let helloDiv = document.querySelector(".hello");
// console.log(helloDiv);

// access elements by class name
let helloByClassName = document.getElementsByClassName("hello");
console.log(helloByClassName);

let helloByClassName2 = document.querySelectorAll(".hello");
console.log(helloByClassName2);

// access elements by tag name
let buttonElement = document.getElementsByTagName("button");
console.log(buttonElement);

// DOM Manipulation
let divElements = document.getElementsByTagName("div");
console.log(divElements);

let firstDiv = divElements[0];
console.log(firstDiv);
firstDiv.innerHTML = "<p>Good morning Stutern learners!</p>";

let secondDiv = divElements[1];
secondDiv.innerText = "I hope you all are enjoying JavaScript!";

firstDiv.style.color = "green";
firstDiv.style.backgroundColor = "red";
firstDiv.style["background-color"] = "pink";

firstDiv.style.fontSize = "60px";

let stuternDiv = document.getElementById("stutern");
stuternDiv.style.color = "green";
