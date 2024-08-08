class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a noise.

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Output: Rex barks.
