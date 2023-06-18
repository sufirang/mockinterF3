// task display random number (in 2500 seconds) .

// function generateRandomNumber() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const randomNumber = Math.random();
//         resolve(randomNumber);
//       }, 2500);
//     });
//   }
  
//   // Example usage:
//   generateRandomNumber()
//     .then((number) => {
//       document.body.innerHTML = number; // Displays the random number on the page
//     })
//     .catch((error) => {
//       console.error(error); // Handles any errors that may occur during the process
//     });
// //In this modified code, after receiving the random number in the .then callback, it assigns the number to the innerHTML property of the document.body. This will display the random number directly on the page instead of using console.log.
  
function getRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        resolve(randomNumber);
      }, 2500);
    });
  }
  getRandomNumber()
  .then(number => {
    console.log('Random number:', number);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
