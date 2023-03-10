
// CREATING AN ELEMENT
let paragraphElem = document.createElement("p");
paragraphElem.innerText = "We are celebrating International Women's Day";

// APPENDING AN ELEMENT
let body = document.getElementById("element-creation");
// let body = document.querySelector("#element-creation");
body.appendChild(paragraphElem);

// REMOVING AN ELEMENT
//1. get the element you want to remove
let questionElem = document.querySelector("#question");
//2. get the parent element (see 'body' above)
body.removeChild(questionElem);

// Changing Multiple Elements
// let holidays = document.querySelectorAll("li");
let holidays = document.getElementsByClassName("holiday");

for (let i = 0; i < 3; i++) {
  //   holidays[i].style.backgroundColor = "blue";
  //   holidays[i].style.color = "white";
  //   holidays[i].style.margin = "4px";
  holidays[i].style =
    "color: red; font-size: 20px; background-color: blue; margin: 4px";
}

// EVENTS

// adding an event listener / event handler
let wishButton = document.getElementById("wish-button");

// Method 2
wishButton.onclick = function () {
  alert("Happy International Women's Day");
};

// Method 3
wishButton.addEventListener("click", function () {
  alert("Wishing you a Happy International Women's Day");
});

const alertMessage = function () {
  alert("Wishing you a Happy International Women's Day");
};
wishButton.addEventListener("click", alertMessage);

// Removing an event listener
let removeEventButton = document.getElementById("remove-event-button");
removeEventButton.addEventListener("click", function () {
  wishButton.removeEventListener("click", alertMessage);
  alert("Removed event");
});

// accessing the value of what has been clicked on
for (let i = 0; i < holidays.length; i++) {
  holidays[i].addEventListener("click", function (event) {
    console.log(event);
    alert("The holiday clicked on is " + event.target.innerText);
  });
}

// Problem Statement (to be solved in next extra class)
// In this exercise, you have to create a counter program similar to the one shown above.
// Here are the basic rules to abide by:

// The counter must begin at 0.
// The increment button must increase the count it by 1.
// The decrement button must decrease the count by 1.
// The reset button must reset the count back to 0.
// The decrement button must NOT decrement the count if it's at 0. In other words, negative counts shouldn't be there in the counter.



//Q: Display each of the numbers in a given array in its own heading tag
//For example
// input - [1,2,3]
// output
// <h1> 1 </h1>
// <h1> 2 </h1>
// <h1> 3 </h1>

// h1 - h6

//
const displayArrayNumbersInHeadingTag = (arrayOfNumbers) =>  {
  // instruction
  // let output = document.getElementById("numbers");
  let output = document.createElement("div");
  // let numbersElems = document.getElementsByClassName("number");
  for (let index = 0; index < arrayOfNumbers.length; index++) {
    let heading = document.createElement("h1");
    heading.innerText = arrayOfNumbers[index];
    output.appendChild(heading);
  }
  return output;
}

// displayArrayNumbersInHeadingTag([1,2,3])

body.appendChild(displayArrayNumbersInHeadingTag([11,24,63]));