class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  logMe() {
    console.log(
      ` User Name :${this.name} User Email ${this.email} User Password ${this.password}`
    );
  }
}
class Teacher extends User {
  constructor(name, email, password, subject) {
    super(name, email, password);
    this.subject = subject;
  }
  addCourse() {
    console.log(
      `Teacher Name :${this.name} Teacher Email ${this.email} Teacher Password ${this.password} Teachr Subject${this.subject}`
    );
  }
}
const study = new User("chai", "shukla@gmail.com", "abc87");
study.logMe();
const teach = new Teacher("shukla", "shukla@gmail.com", "abc87", "math");
teach.addCourse();
