// names of students in Odogunyan grammar school

let name1 = "Daniel";
let name2 = "Oluwaseun";
let name3 = "Benita";
let name4 = "Barituka";
let name5 = "Chioma";

// let names = []; // empty array

// using an array literal
let names = ["Daniel", "Oluwaseun", "Benita", "Barituka", "Chioma"];

// using the new keyword
let names2 = new Array("Daniel", "Oluwaseun", "Benita", "Barituka", "Chioma");

console.log(names);
console.log(names2);

let ages = [20, 25, 22, 28, 19]; // an array of numbers
console.log(ages);

let arrayOfMixedDataTypes = [
  30,
  "Nigeria",
  false,
  { name: "Osigwe" },
  ["US", "UK", "Canada"],
  undefined,
];

console.log(arrayOfMixedDataTypes);

// Add elements to an array
let countries = ["Libya"];

// adding elements to the end of an array
countries.push("Mali");
console.log(countries);
countries.push("Botswana", "Egypt");
console.log(countries);

// adding elements to the beginning of an array
countries.unshift("Ghana");
console.log(countries);
countries.unshift("Kenya", "Tanzania");
console.log(countries);

// Finding the length of an array
let numberOfCountries = countries.length;
console.log(numberOfCountries);

let array1 = [];
console.log(array1.length);

// accessing items in an array
// indices (plural of index)
// ['Kenya','Tanzania','Ghana','Libya','Mali','Botswana','Egypt']
// index = position - 1
const firstItem = countries[0];
console.log(firstItem);

// accessing Egypt
const lastItem = countries[6];
console.log("Last country is " + lastItem);

const lastItemAlt = countries[countries.length - 1]; // countries.length - 1
console.log("Last country is " + lastItemAlt);

countries.push("Togo");
const lastItemAlt2 = countries[countries.length - 1];
console.log("Last country is " + lastItemAlt2);

// Removing elements from an array
// removing the last element

console.log(countries);
const removed_element = countries.pop();
console.log(countries);
console.log("The removed element is " + removedElement);

// removing the first element
const removedElementFirst = countries.shift();
console.log(countries);
console.log("The removed element is " + removedElementFirst);

console.log(countries.indexOf("Tanzania"));
