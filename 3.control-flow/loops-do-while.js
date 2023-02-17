// WHILE LOOP

//Problem Statement: Log out numbers 1 - 5

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let initialNumber = 1;
let limit = 5;

while (initialNumber <= limit) {
  console.log(initialNumber);
  initialNumber++;
}



// Problem: Find the sum of positive numbers less than 20
// Solution:
let forLoopSum = 0;
for (let i = 0; i < 20; i++) {
  forLoopSum += i;
}
console.log(forLoopSum);

let whileLoopSum = 0;
let whileLoopNum = 0;
while (whileLoopNum < 20) {
  whileLoopSum += whileLoopNum;
  whileLoopNum++;
}

console.log(whileLoopSum);



// DO..WHILE

//Problem Statement: Find the sum of positive numbers between 10 and 20 using do..while loop

let doWhileNumber = 11;
let doWhileSum = 0;

do {
  // statement you want to execute
  doWhileSum += doWhileNumber;
  doWhileNumber++;
} while (doWhileNumber < 20);

console.log(doWhileSum);

// BREAK AND CONTINUE

// Problem Statement: Find the sum of positive numbers between 10 and 20.
// Do not add numbers greater than 15
// Solution: Here we demonstrate the use of 'break' the exist the loop
let sumNumbers = 0;
let number = 11;
while (number < 20) {
  sumNumbers += number;
  number++;
  if (number > 15) {
    break;
  }
}

console.log(sumNumbers);



// Problem Statement: Write program to log 1 - 5 and skip number 4
// Here we see demonstrate the use of continue in a for loop
for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i);
}



// Problem Statement: Find the sum of positive numbers between 10 and 20.
// Do not add numbers divisible by 2;

// Here we demonstrate the use of continue to skip numbers divisible by 2.

let sumOfOddNumbers = 0;
let initialNum = 10;
while (initialNum < 20) {
  initialNum++;
  if (initialNum % 2 === 0) {
    continue;
  }
  sumOfOddNumbers += initialNum;
}

console.log(sumOfOddNumbers);



// DIFF BTW WHILE VS DO..WHILE

/**
 * While loops check condition first before executing what is in the loop body.
 * Do..while loops execute what is in the loop body first before checking the condition.
 */

let x = 5;
while (x < 5) {
  console.log(x); // does not log out anything
  x++;
}

let y = 5;
do {
  console.log(y); // logs out 5
  y++;
} while (y < 5);
