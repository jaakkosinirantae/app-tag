/*
   Filename: complexCode.js

   This code demonstrates a complex and sophisticated example of a car rental system. 
   It allows users to rent cars, view available cars, return cars, and perform various 
   administrative functions.

   Note: This is just a simulated implementation and does not include actual database 
   interactions or user interfaces. 

   Author: John Doe
   Date: February 2, 2022
*/

// Car model class
class Car {
  constructor(id, brand, model, year, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.isAvailable = true;
  }

  rent() {
    this.isAvailable = false;
  }

  returnCar() {
    this.isAvailable = true;
  }

  getPrice() {
    return this.price;
  }

  toString() {
    return `${this.brand} ${this.model} (${this.year}) - $${this.price}/day`;
  }
}

// Rental system class
class RentalSystem {
  constructor() {
    this.cars = [];
    this.transactions = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeCar(car) {
    const index = this.cars.findIndex((c) => c.id === car.id);
    if (index > -1) {
      this.cars.splice(index, 1);
    }
  }

  rentCar(carId, days, customerId) {
    const car = this.cars.find((c) => c.id === carId);
    if (car && car.isAvailable) {
      car.rent();
      const totalPrice = days * car.getPrice();
      this.transactions.push({ customerId, carId, totalPrice });
      return `Car rented successfully for $${totalPrice}.`;
    }
    return 'Failed to rent car. Invalid car ID or car is not available.';
  }

  returnCar(carId, customerId) {
    const car = this.cars.find((c) => c.id === carId);
    if (car) {
      car.returnCar();
      const transactionIndex = this.transactions.findIndex(
        (t) => t.customerId === customerId && t.carId === carId
      );
      if (transactionIndex > -1) {
        const transaction = this.transactions[transactionIndex];
        this.transactions.splice(transactionIndex, 1);
        return `Car returned successfully. Total price: $${transaction.totalPrice}.`;
      }
    }
    return 'Failed to return car. Invalid car ID or customer did not rent this car.';
  }

  getAvailableCars() {
    return this.cars.filter((car) => car.isAvailable);
  }

  getTotalRevenue() {
    return this.transactions.reduce((total, transaction) => total + transaction.totalPrice, 0);
  }
}

// Create car rental system instance
const rentalSystem = new RentalSystem();

// Create sample cars
const car1 = new Car(1, 'Toyota', 'Camry', 2020, 50);
const car2 = new Car(2, 'Honda', 'Civic', 2021, 60);
const car3 = new Car(3, 'Ford', 'Mustang', 2019, 150);

// Add cars to rental system
rentalSystem.addCar(car1);
rentalSystem.addCar(car2);
rentalSystem.addCar(car3);

// Rent cars
console.log(rentalSystem.rentCar(1, 5, 1001));
console.log(rentalSystem.rentCar(2, 3, 1002));

// Return cars
console.log(rentalSystem.returnCar(1, 1001));
console.log(rentalSystem.returnCar(2, 1002));

// Get available cars
console.log(rentalSystem.getAvailableCars());

// Get total revenue
console.log(rentalSystem.getTotalRevenue());
