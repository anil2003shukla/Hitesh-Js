// function myname(){
//     console.log("A");
//     console.log("N");
//     console.log("I");
//     console.log("L");
// }
// myname();
// function AddTwoNum(num1,num2){
//     console.log(num1+num2);

// }
// function AddTwoNum(num1,num2){
//     // let result=num1+num2;
//     // return result;
//     return num1+num2;
    

// }
// const result=AddTwoNum(5,7);
// console.log(result);
function loginUserMessage(username){
    if(username==undefined){
        console.log( "Please enter your username");
        return;
    }
    return `${username} just loggedin `
}

// const result=loginUserMessage('John');
// console.log(result);

console.log(loginUserMessage());




