function ceasercipher(str, shift) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
       let char = str[i];0    // the i flag makes the matching case-insensitive. Therefore, this condition checks
      //  if the current character is an alphabet letter, either lowercase or uppercase.
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {  // uppercase letters
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);

        } else if (code >= 97 && code <= 122) {  // lowercase letters

          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);

        }
      }
      result += char;
    }
 
    return result;
  }
  
  console.log(ceasercipher("hello world", 3));  // "khoor zruog"
  console.log(ceasercipher("HELLO WORLD", 3));  // "KHOOR ZRUOG"
  

