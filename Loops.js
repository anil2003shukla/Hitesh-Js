//for of loop
const arr=[1,2,3,4,5];
for(const iterator of arr){
    //console.log(iterator);
}
let count =1;
const greetings="hello sir kaise ho";
for(const iterator of greetings){
    if(iterator==" "){
        count++;
    }
   // console.log(`Each Char is :${iterator}`);
   
}
//console.log(`No of words in string:${count}`)
//Map()


const map=new Map();
map.set('IN','India');
map.set('US','United States');
map.set('UK','United Kingdom');
map.set('AU','Australia');
//console.log(map);
for(const [key ,value]of map){
//    console.log(key,':-',value);
}
// const myObject={
//     name:'Rahul',
//     age:25,
//     city:'Delhi'

// }
//for of could not use in object
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }
const myObject={
    js:'javascript',
    rb:'ruby',
    py:'python'

}
for(const key in myObject){
  //  console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming=['js','py','cpp','java'];
//for in loop
for(const iterator in programming){
   // console.log(programming[iterator]);
}
//map could not iteratable
for(const key in map){
    //console.log(`${key} is for ${map[key]}`);
}
//forEch Loop
const coding=['js','py','java','ruby','swift'];
//for each loop
// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);

// });
// function print(item,index,arr){
//     console.log(item,index,arr);
// }
// coding.forEach(print);
const myCoding=[
    {languageName:'javascript',
      languageFileName:'js'
    },
    {languageName:'java',
        languageFileName:'java'
      },
      {languageName:'python',
        languageFileName:'py'
      },
];
//for each loop
 myCoding.forEach((item)=>{
    console.log(item.languageName);
 });