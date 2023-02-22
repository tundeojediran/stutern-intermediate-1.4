//Q: I want you to create an address object with three properties, street, city, and zip code using the object literal syntax.

const address = {
  street: "Yaba",
  city: "Lagos",
  zip: 23401,
};
console.log(address);

//Q: I want you to create an address object with three properties, street, city, and zip code using the constructor notation.

const address2 = new Object();
address2.street = "Ikorodu";
address2.city = "Lagos";
address2.zip = 23434;

console.log(address2);

function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

const address3 = new Address("Rumuomasi", "Port-Harcourt", 23466);

const address4 = new Address("Oke-Ilewo", "Abeokuta", 0000);

console.log(address3);
console.log(address4);

//Q: I want you to create an address object with three properties, street, city, and zip code using the factory method.

// factory function
function houseAddress(street, city, zip) {
  // literal syntax
  return {
    street: street,
    city: city,
    zip: zip,
  };
}

const address5 = houseAddress("abule-egba", "Lagos", 34945);
const address6 = houseAddress("iwo road", "Ibadan", 234345);
console.log(address5);
console.log(address6);

// NESTED OBJECTS
const student = {
  firstName: "Chimatara",
  lastName: "Kalu",
  age: 18,
  jambScores: {
    ENG: 90,
    MTH: 85,
    PHY: 95,
    CHM: 90,
  },
};

console.log(student);

let chemScore = student.jambScores.CHM; // using dot notation
console.log("chemScore is " + chemScore);

let mthScore = student["jambScores"]["MTH"];
console.log("maths Score is " + mthScore);

// modifying created objects
student.course = "Computer Science";

console.log(student);

student.jambScores.BIO = 70;

console.log(student);

// USING Constructor method to add nested objects to an existing object

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const chimatara = new Student("Chimatara", "Kalu", 18);
const gerald = new Student("Gerald", "Oganwu", 20);

function JambScores(phy, chm, bio, govt, econs, eng, mth, lit, comm) {
  this.PHY = phy;
  this.CHM = chm;
  this.BIO = bio;
  this.GOVT = govt;
  this.ECONS = econs;
  this.ENG = eng;
  this.MTH = mth;
  this.LIT = lit;
  this.COMM = comm;
}

console.log(chimatara);
chimatara.scores = new JambScores(80, 70, 0, 0, 0, 95, 90, 0, 0);

console.log(chimatara);
console.log(chimatara.scores.MTH);

// ASS: create this using the factory method

// Value vs Reference Types
// Primitive Data types - string, number, boolean, undefined, null are passed by value
// Non - Primitive Data types  - Arrays, Objects, Functions (also generally known as Objects) are passed by reference

// Values
let a = 15;
let b = "Nigeria";

let c = a; // c is 15
let d = b; // d is Nigeria

console.log(c);
console.log(d);

a = 20;
b = "US";

console.log(a, b, c, d);

//Reference
let x = { value: 10 };
x.value = 20;

console.log(x);

y = x; // y is {value: 20}
console.log(y);

x.value = 40;

console.log(y);

// RECAP EXERCISES
// Here is an object representing a person
const person = {
  name: "Monica",
  age: 22,
  gender: "female",
};

// Q1: Using dot notation, how will you add property height of 5ft to person object?
person.height = "5ft";
// bracket notation
person["height"] = "5ft";

// Q2: Create person object using factory method

// Step 1
function createPerson(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
  };
}

// Step 2
const person1 = createPerson("Monica", 22, "female");
const daniel = createPerson("Daniel", 20, "male");

//END OF RECAP EXERCISES
//==========================================================

// How do we copy/clone an object?
// Option 1 - Using Object.assign()

const firstBook = {
  author: "Chimamanda Adichie",
  title: "Half of a Yellow Sun",
  yearPublished: 2008,
};

// wrong way to make a copy/clone of an object
// const secondBook = firstBook;

// correct way to make a copy/clone of an object
const secondBook = Object.assign({}, firstBook);

console.log(firstBook);
console.log(secondBook);

secondBook.title = "Purple Hibiscus";

console.log("After change title of second book");
console.log(firstBook);
console.log(secondBook);

// Option 2 - Using spread syntax i.e, ...

const thirdBook = { ...firstBook };
thirdBook.title = "Americanah";
console.log({ firstBook });
console.log({ thirdBook });

// Option 3 - Using the method JSON.parse(JSON.stringify())
// JSON - JavaScript Object Notation
const fourthBook = JSON.parse;
fourthBook.title = "Notes on Grief";
console.log({ firstBook });
console.log({ fourthBook });

// MERGE OBJECTS
// option 1 - Using Object.assign(target, source)
const firstBookDetails = {
  publisher: "Penguin Books",
  copiesSold: "1 million",
  pages: "502",
  edition: "3rd",
};

// const firstBookInfo = Object.assign(firstBook, firstBookDetails)
// console.log({firstBookInfo})

Object.assign(firstBook, firstBookDetails);
console.log({ firstBook });

// option 2 - Using spread operator - ...
// syntax  {...firstObj, ...secondObj}
const secondBookDetails = {
  publisher: "Penguin Books",
  copiesSold: "1 million",
  pages: "502",
  edition: "3rd",
  key: "",
};

const secondBookInfo = { ...secondBook, ...secondBookDetails };
console.log({ secondBookInfo });

// Enumeration of Properties in an Object
// Enumeration simply means the action of mentioning a number of things one by one.

// So if you asked to enumerate properties in an object,
// it means list the properties in that object

// Below are ways we can enumerate properties in an object

//for..in loops
for (const key in secondBookInfo) {
  // action to be carried out on each property
  console.log(key); // title
  console.log(secondBookInfo[key]);
}

// Object.keys()
console.log(Object.keys(secondBookInfo)); // an array of keys

// for.. of loops
for (let key of Object.keys(secondBookInfo)) {
  console.log(key);
  console.log(secondBookInfo[key]);
}

// =================================
// How can we copy certain properties of an object to another object?

const obj = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

//using Object.assign()
Object.assign(obj, { d: obj2.d });

console.log(obj);

//using spread operator
// const obj3 = {...obj, ...{d: obj2.d}}
// console.log(obj3)
