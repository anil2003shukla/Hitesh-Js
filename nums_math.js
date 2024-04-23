const score=400;

const balance=new Number(100);
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(3));
//console.log(score);
const otherNumber=123.8968;
//console.log(otherNumber.toPrecision(3));
const hundreds=1000000;
//console.log(hundreds.toLocaleString('en-IN'));
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(6.2));
// console.log(Math.random());
// console.log((Math.random()*10)+1);

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myTimestamp=Date.now();
// console.log(myTimestamp);
// console.log(myDate);
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

console.log(myDate.toLocaleString('default',{
    weekday: "long",
    timeZone:'Asia/Kolkata'
}));
