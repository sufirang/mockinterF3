// Callback hell, also known as the pyramid of doom, is a term used to describe the situation where asynchronous JavaScript
 //code becomes deeply nested and hard to read and maintain due to excessive use of callback functions. 

asyncFunction1((error, result1) => {
  if (error) {
    console.error(error);
  } else {
    asyncFunction2(result1, (error, result2) => {
      if (error) {
        console.error(error);
      } else {
        asyncFunction3(result2, (error, result3) => {
          if (error) {
            console.error(error);
          } else {
            // ... more nested callbacks
          }
        });
      }
    });
  }
});

