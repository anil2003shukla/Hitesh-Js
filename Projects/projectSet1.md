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