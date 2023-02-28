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



// =====================================================================

// Adding, Removing and Replacing Elements at any point in the array
// Using splice() method

// splice
//(start) - from what index in the array do you want to start your operation?
//(deletecount) - how many array elements do you want to remove starting from the index?
// (item1...itemN) - elements you want to insert into the array

// splice(start)
// splice(start, deletecount)
// splice(start, deletecount, item1)
// splice(start, deletecount, item1, item2, item3)

let currencies = ["NGN", "USD", "YEN", "EURO"];
// currencies.unshift('GBP');

// adding 4 items to the beginning of the array
// currencies.splice(0, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')

// inserting elements in between an array
// currencies.splice(2, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')

// adding elements at the end of an array
// currencies.splice(4, 0, 'GBP', 'CAD', 'CEDIS', 'ZAR')

// removing element(s) in an array
// currencies.splice(1, 2)

// replace element(s) in an array
// let removedElements = currencies.splice(1, 2, 'GBP', 'CAD', 'CEDIS', 'ZAR')
// console.log('removed elements are ' + removedElements )

// console.log(currencies)
// currencies.splice(1,1) // remove USD
// console.log(currencies)
// currencies.splice(2, 1, ['CEDIS', 'AUD'], 13 ) // remove Euro
// console.log(currencies)

// MERGING ARRAYS
// Using the concat() method

let cheapCars = ["Audi", "Mazda", "Nissan"];
let expensiveCars = ["Lamborghini", "Ferrari", "Maserati"];

// let allCars = cheapCars.concat(expensiveCars)
// console.log(allCars)

let commonCars = ["Honda", "Toyota", "Mercedes"];

let allCars = cheapCars.concat(expensiveCars).concat(commonCars);
console.log(allCars);
// [
//   'Audi',     'Mazda',
//   'Nissan',   'Lamborghini',
//   'Ferrari',  'Maserati',
//   'Honda',    'Toyota',
//   'Mercedes'
// ]

// How do you know if an element is present in an array?

// using indexOf()
let ferrariIndex = allCars.indexOf("Ferrari");
console.log(ferrariIndex); // Ferrari is present

let kiaIndex = allCars.indexOf("Kia");
console.log(kiaIndex);

// add kia to list of cars if not present
// if(ferrariIndex === -1) {
//   allCars.push('Ferrari')
// } else {
//   console.log('Ferrari is already present')
// }

// using includes()

// let isKiaPresent = allCars.includes('Kia') // false
// console.log(isKiaPresent)

// if(isKiaPresent) {
//   console.log('Kia is already present')
// } else {
//   allCars.push('Kia')
// }

// console.log(allCars)

let arrayOfCarsObjects = [
  { car: "Nissan" },
  { car: "Toyota" },
  { car: "Audi" },
  { car: "Maserati" },
  { car: "Lamborghini" },
];

// Finding if an object exist in an array
// Using find();

let isNissanPresent = arrayOfCarsObjects.find(function (carObject) {
  return carObject.car === "Nissan";
});

console.log(isNissanPresent); //

let maserati = arrayOfCarsObjects.find(function (element) {
  // {car: 'Maserati'}
  return element.car === "Maserati"; //true
});
console.log(maserati);
