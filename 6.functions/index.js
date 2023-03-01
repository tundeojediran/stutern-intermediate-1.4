// function that caps bottles

// defining a function
function bottleCapper (bottle, cap) {
    // return bottle + cap // shorthand
    let result = bottle + " and " + cap; // instruction
    return result // output
  }  
  
  // call/run/execute/invoke
  let cocacolaBottle = bottleCapper('transparent bottle', 'red cap');
  console.log(cocacolaBottle)
  
  
  // Two ways to define a function
  // 1 - Function declaration
  function bottleCapper (bottle, cap) {
    // return bottle + cap // shorthand
    let result = bottle + " and " + cap; // instruction
    return result; // output
  }
  
  // 2 - Function expression
  // the name of the function does not come after the function key.
  // the variable that the function is assigned to becomes the function name
  // The variable is taking a function as its value 
  const bottleCapper2 = function (bottle, cap) {
    let result = bottle + " and " + cap; // instruction
    return result; // output
  }
  
  let spriteBottle = bottleCapper2('transparent bottle', 'green cap');
  console.log(spriteBottle)
  
  // Function expression using arrow method / Arrow function expression
  // => replaces the function keyword
  // In essence, function () changes to () =>
  // the {} is optional
  // when you use the {}, you will need to use the return keyword
  const bottleCapper3 = (bottle, cap) => bottle + " and " + cap;
  
  const bottleCapper4 = (bottle, cap) => {
    // return bottle + " and " + cap;
    let result = bottle + " and " + cap; // instruction
    return result; // output
  }
  
  
  const fantaBottle = bottleCapper3('transparent bottle', 'orange cap')
  console.log(fantaBottle)
  
  
  // functions without arguments 
  function greet() {
    return 'Hello Stutern learners'
  }
  
  console.log(greet())
  
  // functions with arguments 
  function greet2(name) {
    return 'Hello ' + name
  }
  
  console.log(greet2('Tina'))
  console.log(greet2('Idris'))
  console.log(greet2('Mercy'))
  
  function greet3() {
    console.log('Hello World')
    // return undefined
  }
  greet3()
  
  function sayHi() {
    return 'Hi,  ';
  }
  
  function greetings(name, sayHi) {
    return sayHi() + name 
  }
  
  console.log(greetings('Daniel', sayHi))
  
  function createCar() {
    return {
      name: 'Toyota',
      model: 'Avensis'
    }
  }
  
  const createCar = function () {
    return {
      name: 'Toyota',
      model: 'Avensis'
    }
  }
  
  // function () changes to () =>
  const createCar = () => {
    return {
      name: 'Toyota',
      model: 'Avensis'
    }
  }
  
  
  let multBy2 = [1,2,3,4].map(function (num) {
    let result = num * 2;
    return result
  })
  
  // arrow function
  let multiBy2 = [1,2,3,4].map((num) => {
     let result = num * 2;
    return result
  })