function SetUserName(username){
    //complex db call
    this.username=username;
    console.log("called");
}
function createUser(username,email,password){
    SetUserName.call(this,username);
    this.email=email;
    this.password=password;
}
const chai=new createUser("chai","shukla@gmail.com",'Anil87');
console.log(chai);