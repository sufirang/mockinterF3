// function ceasercipher(str,shift) {
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//          let char = str[i];
//         if(char.match(/[a-z]/i)) {
//             let code = str.charCodeAt(i)

//             if(code >= 65 && code <= 99)  {  // uppercase letters
//                 char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      
//               } else if (code >= 97 && code <= 122) {  // lowercase letters
      
//                 char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      
//               }
//             }
//             result += char;
//           }
       
//           return result;
//         } 
// console.log(ceasercipher("hello world", 3));
// console.log(ceasercipher("HELLO WORLD", 3)); /


// asyncFunction1((error, result1) => {
//     if(error) {
//         console.error(error);
//     } else {
//         asyncFunction2(result1, (error, result2) => {
//             if(error) {
//                 console.error(error);
//             } else { 
//                asyncFunction3(result2, (error, result3) => {
//                 if(error) {
//                     console.error(error);
//                 } else {
//                     //....more nested callbacks
//                 }
//                });
//             }
//         });
//     }
// });setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("I love You !!");
// }setTimeout(function() { myFunction("I love You !!!"); }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }


setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
 console.log(value);
}


// asynccalculator
function myDisplayer(something) {
    console.log(something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);