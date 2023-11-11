/*
Filename: ComplexCode.js
Description: A complex and elaborate JavaScript code demonstrating advanced concepts and functionality.
*/

// Define a class for a complex number
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary);
  }

  subtract(other) {
    return new Complex(this.real - other.real, this.imaginary - other.imaginary);
  }

  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  }

  divide(other) {
    const divisor = other.real * other.real + other.imaginary * other.imaginary;
    const real = (this.real * other.real + this.imaginary * other.imaginary) / divisor;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / divisor;
    return new Complex(real, imaginary);
  }

  modulus() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  toString() {
    if (this.imaginary === 0) {
      return `${this.real}`;
    } else {
      return `${this.real} + ${this.imaginary}i`;
    }
  }
}

// Create some complex numbers
const complex1 = new Complex(2, 3);
const complex2 = new Complex(-1, 4);

// Perform some operations
const addition = complex1.add(complex2);
const subtraction = complex1.subtract(complex2);
const multiplication = complex1.multiply(complex2);
const division = complex1.divide(complex2);

// Print the results
console.log(`Complex 1: ${complex1}`);
console.log(`Complex 2: ${complex2}`);
console.log(`Addition: ${addition}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Division: ${division}`);
console.log(`Modulus of complex 1: ${complex1.modulus()}`);
console.log(`Modulus of complex 2: ${complex2.modulus()}`);


// Additional code demonstrating dynamic class construction and function manipulation

// Define a factory function to create custom classes with dynamic methods
function createCustomClass(methodNames) {
  class CustomClass {
    constructor(name) {
      this.name = name;
    }
  }

  methodNames.forEach((methodName) => {
    CustomClass.prototype[methodName] = function () {
      console.log(`${this.name} is calling the ${methodName} method.`);
    };
  });

  return CustomClass;
}

// Create a custom class and use its dynamic methods
const MyCustomClass = createCustomClass(['method1', 'method2', 'method3']);

const instance1 = new MyCustomClass('Instance 1');
instance1.method1();
instance1.method2();

const instance2 = new MyCustomClass('Instance 2');
instance2.method3();
instance2.method2();
instance2.method1();