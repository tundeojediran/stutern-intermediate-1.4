// EVENTS

// adding an event listener / event handler
let wishButton = document.getElementById("wish-button")

// Method 2
wishButton.onclick = function () {
    alert("Happy International Women's Day");
}

// Method 3
wishButton.addEventListener("click", function () {
    alert("Wishing you a Happy International Women's Day");
});

const alertMessage = function () {
    alert("Wishing you a Happy International Women's Day");
}
wishButton.addEventListener("click", alertMessage);


// Removing an event listener
let removeEventButton = document.getElementById("remove-event-button");
removeEventButton.addEventListener("click", function() {
    wishButton.removeEventListener('click', alertMessage);
    alert("Removed event");
})

// accessing the value of what has been clicked on 
let holidays = document.getElementsByClassName("holiday");

for (let i = 0; i < holidays.length; i++) {
    // add style to each item in the list
    holidays[i].style = "color: red; font-size: 20px; background-color: blue; margin: 4px"

    // add click event listener to each item in the list
    holidays[i].addEventListener('click', function(event){
        console.log(event)
        alert('The holiday clicked on is ' + event.target.innerText)
    })
}


// Problem Statement (to be solved in next extra class)
// In this exercise, you have to create a counter program similar to the one shown above.
// Here are the basic rules to abide by:

// The counter must begin at 0.
// The increment button must increase the count it by 1.
// The decrement button must decrease the count by 1.
// The reset button must reset the count back to 0.
// The decrement button must NOT decrement the count if it's at 0. In other words, negative counts shouldn't be there in the counter.


