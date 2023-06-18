// Write a function called caesarCipher that takes in two arguments: a string to encode and a number representing the shift.
//The function should shift each letter of the string by the shift amount to the right in the alphabet.
// For example, if the shift is 3, then "a" becomes "d", "b" becomes "e", "c" becomes "f", and so on.Playground: https://githubbox.com/acciojob/frontend3_mock_console 

function caesarCipher(str, shift) {
    // Handle shift values outside the range of 1-25
    shift = shift % 26;
    if (shift <= 0) {
      shift += 26;
    }
 
    let result = '';
 
    // Iterate over each character in the input string
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
 
      // Check if the character is a letter
      if (char.match(/[a-z]/i)) {
        let charCode = str.charCodeAt(i);
 
        // Determine the case (uppercase or lowercase)
        let isUpperCase = char === char.toUpperCase();
 
        // Apply the shift to the character code
        charCode = ((charCode - 97 + shift) % 26) + 97; // For lowercase letters
        // charCode = ((charCode - 65 + shift) % 26) + 65; // For uppercase letters
 
        // Convert the character code back to a letter
        char = String.fromCharCode(charCode);
 
        // Maintain the case of the original letter
        if (isUpperCase) {
          char = char.toUpperCase();
        } else {
          char = char.toLowerCase();
        }
      }
 
      // Append the character to the result string
      result += char;
    }
 
    // Return the resulting encrypted string
    return result;
  }
 
  // Example usage:
  console.log(caesarCipher('abc', 3)); // Output: def
  console.log(caesarCipher('xyz', 1)); // Output: yza
  console.log(caesarCipher('Hello, World!', 7)); // Output: Olssv, Dvysk!  

  console.log(caesarCipher('ABC', 3)); // Output: def