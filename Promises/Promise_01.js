// const promiseOne=new Promise(function(resolve,reject){
 //Do an async task
 //db calls.cryptography.network
//   setTimeout(function(){
//     console.log('Async task is complete')
//   },1000)
//   resolve();
// })
// promiseOne.then(function(){
//     console.log('Promise is consume')
// });
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task2 is complete')
//     },1000)
//     resolve();
// }).then(function(){
//     console.log('Promise is consume2');
// })
const promise_03=new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({suerName:"chai",email:"chai@example.com"})
    },1000)
})
promise_03.then(function(user){
     console.log(user);
});
const promise_04=new Promise(function(resolve,reject){
    setTimeout(function(){
    let error=true;
    if(!error){
        resolve({userName:"Anil",pass:"1234"})
    }else{
        reject("Error:Something Went wrong");
    }
    },2000)
})
promise_04
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);

})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log('the promise either resolve or reject');
})
const promise_05=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({userName:"javascript",pass:"1234"})
        }else{
            reject("Error:Js Went wrong");
        }
        },2000)
    })
    async function consumePromise_05(){
      try{
        const response= await promise_05
        console.log(response);
      }
       catch(error){
        console.log(error);
       }
    }
    consumePromise_05();

// async function getAllUsers(){
//   try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//   const data= await response.json();
//   console.log(data);
//   }
//   catch(error){
//     console.log(error);
//   }
// }
// getAllUsers();

//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')
.then((respose)=>{
    return respose.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});