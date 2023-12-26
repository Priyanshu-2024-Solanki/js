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

## project 3 solution code 

```javascript
const clock = document.getElementById('clock');
setInterval( function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
} , 1000);
```

## project 4 solution

```javascript
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
  submit.addEventListener('click',function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('Please enter a valid no.');
  } else if(guess < 1) {
    alert('Please enter a number more than 1');
  } else if(guess > 100) {
    alert('Please enter a numeber less than 100');
  } else {
    prevGuess.push(guess);
    if(numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if(guess > randomNumber) {
    displayMessage('Number is TOOO high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector(`#newGame`);
  newGameButton.addEventListener('click',function() {
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  })
}
```

## project 5 solution 

```javascript
const getRandomColour = function() {
  const hex = "0123456789ABCDEF";
  let randomColour = "#";
  for(let i=0 ; i<6 ; i++)
  {
    randomColour += hex[Math.floor(Math.random()*16)];
  }
  return randomColour;
}

const generate = function(){
  document.body.style.backgroundColor = getRandomColour();
}

let genId;
document.querySelector('#start').addEventListener('click',function(){
  genId = setInterval(generate,1000);
})

document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(genId);
  genId = null;
})
```

## project 6 solution 

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
    <div class="color"> 
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    </table>
    </div>
  `
})
```

