# Projects Relaltes To DOM

## projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( function(button) {
  console.log(button);
  button.addEventListener('click' , function(e) {
    if(e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    else if(e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    else if(e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    else if(e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  })
});
```