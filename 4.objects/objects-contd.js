//Q: I want you to create an address object with three properties, street, city, and zip code using the object literal syntax. 

const address = {
    street: 'Yaba',
    city: 'Lagos',
    zip: 23401
  }
  console.log(address)
  
  //Q: I want you to create an address object with three properties, street, city, and zip code using the constructor notation. 
  
  const address2 = new Object();
  address2.street = 'Ikorodu';
  address2.city = 'Lagos';
  address2.zip = 23434;
  
  console.log(address2);
  
  function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
  
  const address3 = new Address('Rumuomasi', 'Port-Harcourt', 23466);
  
  const address4 = new Address('Oke-Ilewo', 'Abeokuta', 0000)
  
  console.log(address3)
  console.log(address4)
  
  
  //Q: I want you to create an address object with three properties, street, city, and zip code using the factory method.
  
  // factory function
  function houseAddress(street, city, zip) {
    // literal syntax
    return {
      street: street,
      city: city,
      zip: zip
    }
  }
  
  const address5 = houseAddress('abule-egba', 'Lagos', 34945);
  const address6 = houseAddress('iwo road', 'Ibadan', 234345);
  console.log(address5)
  console.log(address6)
  
  
  // NESTED OBJECTS
  const student = {
    firstName: 'Chimatara',
    lastName: 'Kalu',
    age: 18,
  jambScores: {
      ENG: 90,
      MTH: 85,
      PHY: 95,
      CHM: 90,
    },
  }
  
  console.log(student)
  
  let chemScore = student.jambScores.CHM; // using dot notation
  console.log('chemScore is ' + chemScore)
  
  let mthScore = student['jambScores']['MTH'];
  console.log('maths Score is ' + mthScore)
  
  // modifying created objects
  student.course = 'Computer Science';
  
  console.log(student);
  
  student.jambScores.BIO = 70;
  
  console.log(student);
  
  
  // USING Constructor method to add nested objects to an existing object
  
  function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  const chimatara = new Student('Chimatara', 'Kalu', 18);
  const gerald = new Student('Gerald', 'Oganwu', 20);
  
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
  chimatara.scores = new JambScores(80, 70, 0, 0, 0, 95, 90, 0, 0)
  
  console.log(chimatara);
  console.log(chimatara.scores.MTH);
  
  
  // ASS: create this using the factory method
  
  // Value vs Reference Types
  // Primitive Data types - string, number, boolean, undefined, null are passed by value
  // Non - Primitive Data types  - Arrays, Objects, Functions (also generally known as Objects) are passed by reference 
  
  // Values
  let a = 15;
  let b = 'Nigeria';
  
  let c = a; // c is 15
  let d = b; // d is Nigeria
  
  console.log(c);
  console.log(d);
  
  a = 20;
  b = 'US';
  
  console.log(a, b, c, d);
  
  //Reference
  let x = {value: 10}
  x.value = 20;
  
  console.log(x);
  
  y = x; // y is {value: 20}
  console.log(y);
  
  x.value = 40;
  
  console.log(y)
  
  // NEXT CLASS: How do we copy/clone an object?
  
  