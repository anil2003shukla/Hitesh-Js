const userEmail=[];

if(userEmail){
    console.log("Got user email");

}
else{
    console.log("Don't Have user email");
}

//falsy values false , 0, "", null, undefined, NaN,-0
//truthy  value true, non-zero number, non empty string, object or array.
//Nullish Coalescing Operator(??): null undefined

let value;
value=5 ?? 10;
value=null??10
value=undefined??null
console.log(value);