function* randomGenerator() {
    while (true) {
      yield Math.random();
    }
  }
  
  //Creating an instance of the generator
  const generator = randomGenerator();
  
  //Calling the generator multiple times to get random numbers
  console.log(generator.next().value); // Output: 0.123456789 (example)
  console.log(generator.next().value); // Output: 0.987654321 (example)
  console.log(generator.next().value); // Output: 0.567891234 (example)
  // and so on...
  
// In this example, the randomGenerator function is a generator that uses an infinite loop (while (true)) to
//continuously yield random numbers using Math.random(). When the generator's next() method is called,
// it pauses at the yield statement and returns an object with the value property containing the generated random number. Each 