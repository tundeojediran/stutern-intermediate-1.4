// QUESTION 5
/** 
*Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
  “The number (pwr) is the power of 2 nearest to (num).”
  
If there are two candidate values, display the smaller one.
For example, 2 and 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log in to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log in to your console in this format:
“The number 64 is the power of 2 nearest to 50.”

*/ 

// Problem Breakdown
// Input - a postive number, num
// Output - power of 2 nearest to num, pwr

// Test Cases
// - if num = 3, pwr = 2
// - If num = 40, pwr = 32
// - If num = 50, pwr = 64

// Pseudocode / Logic / Conditions
// get input
// set initial power, pwr = 0
// set index = 0
// while 2**index < num, set lastpower == 2**index. Then, keep doing 2**index
// if power > num , set pwr  = new power
// if new power - number >= num - lastpower, then pwr = lastpower

let num = 40;

let pwr = 0;
let index = 0;
let previousPower = 0;

while (pwr < num) {
  previousPower = pwr;
  pwr = 2**index;
  index++
}

let diff1 = num - previousPower; // 50 - 32 = 18
let diff2 = pwr - num;  // 64 - 50 = 14

if (diff2 >= diff1) {
  pwr = previousPower  // 64
}

console.log("The number " + pwr + " is the power of 2 nearest to " + num);

