//objects literals
// const mySym=Symbol("kye1");
// const JsUser={
//     name:"Anil",
//     [mySym]:"myKey1",
//     age:21,
//     location:"Lucknow",
//     email:"anil.kumar@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// JsUser.email="anikumar97@gmail.com";
// Object.freeze(JsUser);
// JsUser.email= "anikumar98@gmail.com";
// console.log(JsUser.email);
// JsUser.greeting=function(){
//     console.log("hello Js user");
// };
// console.log(JsUser.greeting());

// const tinderUser=new Object();
// const tinderuser={};
// tinderUser.id="1234abc";
// tinderUser.name="Anil";
// tinderUser.isLoggedIn=false;
// // console.log(tinderUser);
// const regularUser={
//     email:"some@gmail.com",
//     fullName:{
//         userfull:{
//           firstName:"Anil",
//           lastName:"chaudhary"  
//         }
//     }
// }
// //console.log(regularUser.fullName.userfull.firstName);
// const obj1={1:"a",2:"b",};
// const obj2={3:"a",4:"b"};
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3)
// const onj3={...obj1,...obj2};
// console.log(onj3);
// const users=[
//     {
//         id:1,
//         email:"shuklaji@gmail.com"
//     },
//     {
//         id:1,
//         email:"shuklaji@gmail.com"
//     },
//     {
//         id:1,
//         email:"shuklaji@gmail.com"
//     },
//     {
//         id:1,
//         email:"shuklaji@gmail.com"
//     }
// ]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    coursename:"Js with Anil",
    price:"900",
    courseInstructor:"Anil"
}

//course.courseInstructor
const {courseInstructor:instructor}=course;
//console.log(courseInstructor);
console.log(instructor);
