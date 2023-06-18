// Create a function which returns a promise and returns a random number after 2500 milliseconds

function generateRandomNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        resolve(randomNumber);
      }, 2500);
    });
  }
  
  // Example usage:
  generateRandomNumber()
    .then((number) => {
      console.log(number); // Logs a random number after 2500 milliseconds
    })
    .catch((error) => {
      console.error(error); }); // Handles any errors that may occur during procs
  
//In this code, the generateRandomNumber function creates a new promise. Inside the promise, it uses setTimeout to 
//introduce a delay of 2500 milliseconds. After the delay, it generates a random number using Math.random() and resolves
//the promise with that number using the resolve function. The returned promise can then be chained with .then to handle
//the resolved value (the random number) or with .catch to handle any errors that may occur during the process.
  
  
  