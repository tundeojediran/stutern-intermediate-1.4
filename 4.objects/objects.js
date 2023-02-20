// CAR
/**
 * properties - brand, color, number of tyres, number of doors, isAutomatic
 *
 * functionalities - move forward, reverse, accelerate, play music, stop, start
 */

// How can we create an object?

/**
 * Literal Notation
 */

// syntax for literal notation
// const objectName = {
//     key1: value1, // key-value pair
//     key2: value2,
//     ...
// }

const Car1 = {
  brand: "Porsche",
  color: "black",
  numberOfTyres: 4,
  numberOfDoors: 4,
  isAutomatic: true,
  currentDistance: 0,
  displayNumberOfTyres: function () {
    return this.numberOfTyres;
  },
  moveForward: function () {
    this.currentDistance++;
    return this.currentDistance;
  },
};

console.log(Car1);

/**
 * Constructor Notation
 */

const Car2 = new Object();
Car2.brand = "Mercedes Benz";
Car2.color = "white";
Car2.numberOfTyres = 4;
Car2.numberOfDoors = 4;
Car2.isAutomatic = false;
Car2.displayNumberOfTyres = function () {
  return this.numberOfTyres;
};

console.log(Car2);



// How do we access object properties and methods?

//Using Dot notation
console.log("Brand of Car One is " + Car1.brand);
console.log("Brand of Car Two is " + Car2.brand);

//Using Bracket notation
console.log("Color of Car One is " + Car1["color"]);
console.log("Color of Car Two is " + Car2["color"]);

// Accessing Object Methods
// Syntax = objectName.method();

console.log("The number of tyres in Car 1 are " + Car1.displayNumberOfTyres());
console.log("The number of tyres in Car 1 are " + Car1.displayNumberOfTyres());

console.log(Car1.moveForward());

// Why do we use the constructor method:

/**
 * Constructor notation can be used as a template or blueprint
 * for creating new objects.
 */

// Using TOYOTA as an Example
// Avensis, Corolla, Rav4, Camry, Highlander

// Common properties & methods a Toyota Car has
/**
 * properties - numberOfTyres, brand, model, numberOfDoors, numberOfSpareTyres, isAutomatic
 * methods - reverse, move forward, accelerate, stop, start
 */

// The function which serves as a blue print for all Toyota cars
function Toyota(model, year, numberOfTyres, isAutomatic, currentDistance) {
  this.numberOfTyres = numberOfTyres;
  this.brand = "Toyota";
  this.model = model;
  this.year = year;
  this.isAutomatic = isAutomatic;
  this.currentDistance = currentDistance;
  (this.accelerate = function () {
    this.currentDistance += 5;
  }),
    (this.displayCurrentDistance = function () {
      return this.currentDistance;
    });
}

/**
 * You create instances of the object using the constructor function.
 * The 'new' keyword followed by a call to the function creates a new object.
 * The properties of each object are given as arguments to the function.
 * You can create multiple objects from a constructor function.
 */

//  an object created from the blue print
let camry = new Toyota("Camry", "2020", 5, true, 0);
console.log(camry);

// an object created from the blue print
let camry2007 = new Toyota("Camry", "2007", 5, false, 1000);
console.log(camry2007);

// an object created from the blue print
let rav42022 = new Toyota("Rav4", "2022", 4, true, 20);
console.log(rav42022);

// accessing object properties using the dot notation
console.log(camry.currentDistance);
console.log(camry2007.currentDistance);
console.log(rav42022.currentDistance);

// accessing object methods using the dot notation
camry.accelerate();
camry2007.accelerate();
rav42022.accelerate();

console.log("After acceleration");
console.log(camry.displayCurrentDistance());
console.log(camry2007.displayCurrentDistance());
console.log(rav42022.displayCurrentDistance());
