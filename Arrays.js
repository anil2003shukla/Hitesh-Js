let myArr=[1,2,6,3,4,3,4]
// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// const newArr=myArr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr); 
// slice splice
console.log("A",myArr);
 
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);

