// let myName='hitesh                '
// console.log(myName.trueLength());
// let myHeroes=["thor","spiderman"]
// let heroPower={
//     thor:"hammer",
//     spiderman:"web",
//     getSpiderPower:function(){
//             console.log(`Spidy power is ${this.spiderman}`)
//     }
// }




// Object.prototype.anil=function(){
//     console.log(`Anil is present in all objects`);
// }
// Array.prototype.heyAnil=function(){
//     console.log(` Hey: Anil `);   
// }
// heroPower.heyAnil();
// myHeroes.anil();
// myHeroes.heyAnil();

//Inheritence
const User={
    name:"chai",
    email:"shukl@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:true
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User
//modern Sysntax
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUserNAme="ChaiAurCode   "
String.prototype.trueLength=function(){
    console.log( `${this}`);
    // console.log( `${this.name}`);
    console.log( `True length is ${this.trim().length}`);
}
anotherUserNAme.trueLength();
"Anil".trueLength();
"Shukla".trueLength();