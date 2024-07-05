// const myNewObj={user:"anil"};
const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);
Math.PI=5;
// console.log(Math.PI);
//  console.log(descripter);
const chai={
    name:"anil",
    price:"250",
    isAvailable:true,
    orderChai:function(){
         console.log("chai order nhi hui");
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",
    {//writable:false,
    enumerable:false
});
console.log(Object.getOwnPropertyDescriptor(chai,'name'));


for(const [key,value] of Object.entries(chai)){
    if(typeof value !=='function')
    console.log( `${key}:${value}`);
}
