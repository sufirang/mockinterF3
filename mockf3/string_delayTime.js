//Make a function which takes a string and delayed time Print time print the string after delay time
function printDelayedString(str, delay) {
    setTimeout(function() {
      console.log(str);
    }, delay);
  }
  
  printDelayedString("Hello, world!", 2000);