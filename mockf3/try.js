// (code - 65 + shift) % 26) + 65)

// console.log(((65-65 + 4)%26)+65)
// 0 +4 %26  =4
// 4 + 65 =60

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function printLetters() {
    await delay(1000);
    console.log('a');
  
    await delay(1000);
    console.log('b');
  
    await delay(1000);
    console.log('c');
  }
  
  printLetters();
  
  // class Student {
  //   constructor(firstName, lastName, age) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.age = age;
  //     this.subjects = [];
  //   }
  
  //   addSubject(subject) {
  //     if (typeof subject !== 'string') {
  //       throw new Error('Subject name must be a string');
  //     }
  
  //     this.subjects.push(subject);
  //   }
  // }
  
  // // Example usage:
  // const student = new Student('John', 'Doe', 20);
  // console.log(student); // Output: Student { firstName: 'John', lastName: 'Doe', age: 20, subjects: [] }
  
  // student.addSubject('Mathematics');
  // student.addSubject('Science');
  // console.log(student); // Output: Student { firstName: 'John', lastName: 'Doe', age: 20, subjects: [ 'Mathematics', 'Science' ] }
  
  // // Error case - subject name is not a string
  // student.addSubject(123); // Throws an error: Subject name must be a string
  