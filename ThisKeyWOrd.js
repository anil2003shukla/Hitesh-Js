const user={
    username:"Anil",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcone to Website`);
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username="chandan";
// user.welcomeMessage();
//console.log(this);
// function chai(){
//     //let username="hitesh"
//     console.log(this);
// }
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username);
// }
// chai();
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
const addTwo=(num1,num2)=>({username:"anil"});


console.log(addTwo(5,6));