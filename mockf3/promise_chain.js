// Promise chaining

function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Result from asyncFunction1');
    }, 2000);
  });
}

function asyncFunction2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const modifiedData = data.toUpperCase();
      resolve(modifiedData);
    }, 1500);
  });
}

function asyncFunction3(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reversedData = data.split('').reverse().join('');
      resolve(reversedData);
    }, 1000);
  });
}

// Example usage:
asyncFunction1()
  .then((result) => {
    console.log(result); // Logs "Result from asyncFunction1"
    return asyncFunction2(result);
  })
  .then((modifiedData) => {
    console.log(modifiedData); // Logs "RESULT FROM ASYNCFUNCTION1"
    return asyncFunction3(modifiedData);
  })
  .then((reversedData) => {
    console.log(reversedData); // Logs "1NOITCNUFYSN FUNCTION CFYRSA"
  })
  .catch((error) => {
    console.error(error); // Handles any errors that may occur during the process
  });
