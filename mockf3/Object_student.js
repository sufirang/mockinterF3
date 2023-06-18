// https4://githubbox.com/acciojob/frontend3_mock_console

  class Animal {
    constructor(name, age, sound) {
      this.name = name;
      this.age = age;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, sound, breed) {
      super(name, age, sound);
      this.breed = breed;
    }
  
    meow() {
      console.log('meow');
    }
  }
  
  // Example usage:
  const animal = new Animal('Leo', 5, 'roar');
  animal.makeSound(); // Output: roar
  
  const cat = new Cat('Whiskers', 3, 'purr', 'Siamese');
  cat.makeSound(); // Output: purr
  cat.meow(); // Output: meow

  
  // Create a class called *`Animal`* with the following properties and methods: - *`name`: a string representing
  // the name of the animal - *`age`*: a number representing the age of the animal - *`sound`*: a string
  // representing the sound that the animal makes - *`makeSound()`*: a method that logs the animal's sound
  // to the console Create a subclass called *`Cat`* that inherits from *`Animal`*, and add the following
  // properties and methods: - *`breed`*: a string representing the breed of the cat - *`meow()`**: a method
  // that logs "meow" to tconsole.Playground: https4://githubbox.com/acciojob/frontend3_mock_console
