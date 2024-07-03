# Projects related to DOM
## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 
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

## Project 2

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
# Solution code

## Project 3
```javascript
const clock=document.getElementById('clock');
let date =new Date();
console.log(date.toLocaleTimeString());
setInterval(function(){
  let date =new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString()
},1000)
```
# Solution code

## Project 4

```javascript
let randomNum=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
  const guess=  parseInt(userInput.value);
  console.log(guess);
  validGuess(guess);
  });
}
function validGuess(guess){
  // 
  if(isNaN(guess)){
    alert('please enter a  no greater than 1');
    userInput.value='';
  }
    else if(guess<1){
      alert('please enter a valid no');
      userInput.value='';
    }
    else if(guess>100){
      alert('please enter the no less than 100');
      userInput.value='';
    }else{
      prevGuess.push(guess);
      if(numGuess==11){
        displayGuess(guess);
        displayMessage(`game Over Random Number Was ${randomNum}`);
        endGame();
      }
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
    }
}
function checkGuess(guess){
  //
  if(guess ==randomNum){
    displayMessage(`You guessted Right`)
  }
 else  if(guess<randomNum){
    displayMessage(`Number is Too Low`);
  }
  else  if(guess>randomNum){
    displayMessage(`Number is Too High`);
  }

}
function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML +=`${guess} `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}
function displayMessage(message){
  //
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame"> Start newGame</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();

}
function newGame(){
//
const newGamebtn=document.querySelector('#newGame');
newGamebtn.addEventListener('click',function(e){
  randomNum=(parseInt(Math.random()*100+1));
  prevGuess=[];
  numGuess=1;
  guessSlot.innerHTML='';
  remaining.innerHTML= `${11-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
})
}
 ```