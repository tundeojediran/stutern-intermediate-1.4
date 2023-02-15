
// CONDITIONAL STATEMENTS
// IF...ELSE

// // if age is greater than or equals to 18, print 'Eligible to Vote'
// // if age is less than 18, print 'Not Eligible to Vote'

let myAge = 20;
let eligibleVoterAge = 18;

if (myAge >= eligibleVoterAge) {
  // output is when condition evaluates to true
  console.log("Eligible to vote");
} else {
  // output is when condition evaluates to false
  console.log("Not eligible to vote");
}

// IF
// if (condition) {
    
// }


// IF...ELSE IF... ELSE

// we want to output the exact grade the student had based on their score
// if score >= 70, A1
// if score is between 65 & 69 B2
// if score is between 60 & 64 B3
// if score is between 55 & 59 C4
// if score is between 50 & 54 C5
// if score is between 45 & 49 C6
// if score is between 40 & 44 D7
// if score is between 31 & 39 E8
// if score is below 30 F9

// Edge cases

let mathScore = -12;

if (mathScore >= 70 && mathScore <= 100) {
  console.log("A1");
} else if (mathScore >= 65 && mathScore <= 69) {
  console.log("B2");
} else if (mathScore >= 60 && mathScore <= 64) {
  console.log("B3");
} else if (mathScore >= 55 && mathScore <= 59) {
  console.log("C4");
} else if (mathScore >= 50 && mathScore <= 54) {
  console.log("C5");
} else if (mathScore >= 45 && mathScore <= 49) {
  console.log("C6");
} else if (mathScore >= 40 && mathScore <= 44) {
  console.log("D7");
} else if (mathScore >= 31 && mathScore <= 39) {
  console.log("E8");
} else if (mathScore >=0 && mathScore <=30) {
  console.log("F9");
} else {
  console.log('Invalid score')
}
