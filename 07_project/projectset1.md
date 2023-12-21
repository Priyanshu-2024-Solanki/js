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

## project 2 solution

```javascript
const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit' , function(e) {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  // console.log(h);
  const r = document.querySelector('#results');

  if(h==='' || h<0 || isNaN(h)) {
    r.innerHTML = `Enter a valid height ${h}`;
  } else if(w==='' || w<0 || isNaN(w)) {
    r.innerHTML = `Enter a valid weight ${w}`;
  } else {
    const bmi = (w/((h*h)/10000)).toFixed(2);
    // console.log(bmi);
    r.innerHTML = `<span>${bmi}</span>`
  }
})
```