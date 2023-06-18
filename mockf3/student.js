//Make a student named object it should have property like age marks and then check if they are greater than 4 or any other number or not

class Student {

    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      if(age<4) {
        console.log (
            "age is lese"
        )
      }
      this.age = age;
      this.subjects = [];
    }
 
  }

  const s = new Student("sufi","bano",4)