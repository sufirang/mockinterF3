// To print a b c through async await and callback.
//   function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }

// async function printLetters() {
//   await delay(1000);
//   console.log('a');


//   await delay(1000);
//   console.log('b');


//   await delay(1000);
//   console.log('c');
// }

// printLetters();

//In this example, the delay function returns a promise that resolves after a specified amount of time. 
//The printLetters function uses await to wait for each delay before printing the corresponding letter.

function printLetters(callback) {
    setTimeout(function() {
      console.log('a');
      setTimeout(function() {
        console.log('b');
        setTimeout(function() {
          console.log('c');
          callback();
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  function finishPrinting() {
    console.log('Printing completed!');
  }
  
  printLetters(finishPrinting);


// Copy code
// function delayCallback(letter, time, callback) {
//   setTimeout(() => {
//     console.log(letter);
//     callback();
//   }, time);
// }

// function printLettersCallback() {
//   delayCallback('a', 1000, () => {
//     delayCallback('b', 1000, () => {
//       delayCallback('c', 1000, () => {});
//     });
//   });
// }

// printLettersCallback();
// In this example, the delayCallback function takes a letter, a time delay, and a callback function. It uses setTimeout to delay the execution of the callback and prints the letter before invoking the callback. The printLettersCallback function calls delayCallback multiple times in a nested manner to ensure the letters are printed in order.
