//ES6
// class User{
//     constructor(name, email,password){
//         this.name=name;
//         this.email=email;
//         this.password=password;

//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//        return  `${this.name.toUpperCase()}`
//     }
// }
// const chai=new User("Anil",'shukla@gmail.com','1234');
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());
//Behind userthe seen
function User(username,email,password){
    this.name=username;
    this.email=email;
    this.password=password;

}
User.prototype.encryptPassword=function(){
     return `${this.password}abc`
}

User.prototype.changeUserName=function(){
      return  `${this.name.toUpperCase()}`
}
const chai=new User("Anil",'shukla@gmail.com','1234');
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
