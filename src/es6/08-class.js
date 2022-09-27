class User {
  //constructor
  constructor() {
    console.log(`Yo me encargo de inicializar una clase.`)
  }

  //metodos
  greeting() {
    return 'Hello';
  }
};

const newUser = new User();
console.log(newUser.greeting());

// Herencia
const otherUser = new User(); //inicialización de una clase con el constructor.
console.log(otherUser.greeting()); // Llamando al método de la clase.

//this: hace referencia al elemento padre que lo contiene

class People {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const juan = new People('Juan');
console.log(juan.greeting());


//getters and setters
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  speak() {
    return 'Hello';
  }

  greeting() {
    return `${this.speak()}, my name is: ${this.name} i'm ${this.age} years old`;
  }

  get getUserAge() {
    return this.age;
  }

  set setUserAge(nAge) {
    this.age = nAge;
  }

}

const cynthia = new People('Cynthia', 23);
//console.log(cynthia.name = 'Carolina');
console.log(cynthia.getUserAge);
console.log(cynthia.setUserAge = 24);
console.log(cynthia.greeting());

//Hacer una calculadora

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(number1, number2) {
    this.valueA = number1;
    this.valueB = number2;
    return this.valueA + this.valueB;
  }
}

const calcularSuma = new Calculator();
console.log(calcularSuma.sum(2, 2));