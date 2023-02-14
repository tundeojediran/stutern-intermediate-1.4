// EQUALITY OPERATOR (!=, !==, ==, ===)
let cash = 2000;
let expenses = '2000';

console.log(cash == expenses) // weak equality operator - checks if values are the same
console.log(cash === expenses) // strict equality operator - checks if the values and the data types are the same

console.log(true == 1);

// TERNARY OPERATOR
let myAge = 34;

// if age is greater than or equals to 18, print 'Eligible to Vote'
// if age is less than 18, print 'Not Eligible to Vote'

//  (condition) ? true : false

(myAge >= 18) ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote')

// LOGICAL OPERATORS;
let nationality = 'American';

(myAge >= 18 && nationality === 'Nigerian') ? console.log('Eligible to Vote') : console.log('Not Eligible to Vote')
// true && false

// AND Operators - &&
// OR Operator - ||

let WAEC = 'PASS';
let NECO = 'PASS';

(WAEC === 'FAIL' || NECO === 'FAIL') ? console.log('Admitted') : console.log('Not Admitted')

// // OPERATOR PRECEDENCE
// // BODMAS?

// // PEMDAS -> Parenthesis, Exponent, Multiplication, Division, Addition, Subtraction

const result = (26 - 2) + 4 / 2
console.log(result)

// // Truthy Values
// // Falsy Value
