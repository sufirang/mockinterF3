// You are given 3 asynchronous functions to execute these 3 functions one after another in sequence using promise chaining.

function asyncFunction1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Function 1');
        resolve();
      }, 1000);
    });
  }
  
  function asyncFunction2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {1
        console.log('Async Function 2');
        resolve();
      }, 1000);
    });
  }
  
  function asyncFunction3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Function 3');
        resolve();
      }, 1000);
    });
  }
  
  asyncFunction1()
    .then(() => asyncFunction2())
    .then(() => asyncFunction3())
    .catch(error => {
      console.error('An error occurred:', error);
    });
  
// In this example, each of the asyncFunction1, asyncFunction2, and asyncFunction3 functions return a promise that resolves
// after a delay of 1 second. The asyncFunction1 is executed first, followed by asyncFunction2, and finally
// asyncFunction3. The then method is used to chain the promises and execute them sequentially. If any error
// occurs in any of the functions, it will be caught and logged in the catch block.
  