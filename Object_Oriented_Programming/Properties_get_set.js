//Function Based Getter Setter
// function User(email,password){
//     this._email = email;
//     this._password = password;
// Object.defineProperty(this,'email',{
//     get:function(){
//         return this._email.toUpperCase();
//     },
//     set:function(value){
//         this._email=value
//     }
// })

// Object.defineProperty(this,'password',{
//     get:function(){
//         return this._password.toUpperCase();
//     },
//     set:function(value){
//         this._password=value
//     }
// })
// }
// const chai=new User("chai@gmail.com",'chai');
// console.log(chai.email);
// console.log(chai.email);
//Object Based getter and setter
const User={
    _email:'chai@gmail.com',
    _password:'chai',
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password=value;
    }

}
const tea=Object.create(User)
// tea.email='chai@gmail.com'
// tea.password='chai'
console.log(tea.email);
console.log(tea.password);
