// Create a class named `Student` having first name, last name, age and subjects properties,
// with subjects being an array which is initially empty- Initialise firstName, lastName and age during object
// declaration using a parameterised constructor- Create a function which lets you add subjects to a student object,
// and throws error if the subject name is not a string 

 class Student {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.subjects = [];
    }
 
    addSubject(subject) {
      if (typeof subject !== "string") {
        throw new Error("Subject name must be a string.");
      }
      this.subjects.push(subject);
    }
  }

  // Create a student object
const student = new Student("John", "Doe", 18);

console.log(student.firstName);  // Output: John
console.log(student.lastName);   // Output: Doe
console.log(student.age);        // Output: 18
console.log(student.subjects);   // Output: []


// Add subjects to the student
student.addSubject("Mathematics");
student.addSubject("English");
student.addSubject("Science");

console.log(student.subjects);
// Output: ["Mathematics", "English", "Science"]


// Trying to add a non-string subject
student.addSubject(123);
//Throws an error: Subject name must be a string+
