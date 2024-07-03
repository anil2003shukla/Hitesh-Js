# Projects related to DOM
## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 
```javascript
console.log("anil")
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(button.id=='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(button.id=='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(button.id=='blue'){
      body.style.backgroundColor=e.target.id;
    }
     if(button.id=='white'){
      body.style.backgroundColor=e.target.id;
    }
     if(button.id=='purple'){
      body.style.backgroundColor=e.target.id;
    }
  });
});

```
# Solution code

## project 2

 ```javascript
    const form =document.querySelector('form');
 //this usecase will give you empty
 form.addEventListener('submit',function(e){
   e.preventDefault();
  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results= document.querySelector('#results');
  if(height==''||height<0||isNaN(height)){
   results.innerHTML=`Please give a valid height :${height}`;
  }
   else if(weight==''||weight<0||isNaN(weight)){
    results.innerHTML=`Please give a valid weight :${weight}`;
   }
   else{
    const bmi= (weight/((height*height)/1000)).toFixed(2);
    //show the result
    if(bmi<18.6){
      results.innerHTML= `Your BMI Under weight <span>${bmi}</span>`
    }
    else if(bmi>18.6&&bmi<24.9){
      results.innerHTML= `Your BMI in Normal Range <span>${bmi}</span>`
    }else{
    results.innerHTML= ` Your BMI in Overweight<span>${bmi}</span>`
    }
   }
  
 
 })
```