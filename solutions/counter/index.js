// Problem Statement (to be solved in next extra class)
// In this exercise, you have to create a counter program similar to the one shown above.
// Here are the basic rules to abide by:

// The counter must begin at 0.
// The increment button must increase the count it by 1.
// The decrement button must decrease the count by 1.
// The reset button must reset the count back to 0.
// The decrement button must NOT decrement the count if it's at 0. In other words, negative counts shouldn't be there in the counter.

// initial value of the counter
let count = 0;

// get all the elements we want to work with
let displayElement = document.getElementById("display");
let incrementButtonElement = document.getElementById("increment");
let decrementButtonElement = document.getElementById("decrement");
let resetButtonElement = document.getElementById("reset");

// this increases the count by 1
// and assigns the value of count to the display element
function increaseCount() {
  count++;
  displayElement.textContent = count;
}

// this decreases the count by 1
// and assigns the value of count to the display element
function decreaseCount() {
  // decrease count if not equals to 0
  if (count !== 0) {
    count--;
  }
  displayElement.textContent = count;
}

// this resets the count to 0
// and assigns the value of count to the display element
function resetCount() {
  count = 0;
  displayElement.textContent = count;
}

incrementButtonElement.addEventListener("click", increaseCount);
decrementButtonElement.addEventListener("click", decreaseCount);
resetButtonElement.addEventListener("click", resetCount);
