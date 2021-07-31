let btn = document.getElementById('clicker');

let magicTrick = document.getElementById('magicWindow');

let timer = document.getElementById('timer');

let num = 0

//! Window object that represents the entire browser
// Defining a variable called "state" to the window
window.state = 'This be me, I am a global variable located int he browser' 

let listDisplay = `<ul id="list">
  <li>number 1</li>
    <li>number 2</li>
    <li>number 3</li>
    <li>number 4</li>
  </ul>

  <ul id="newlist">
    <li>stuff in here 1</li>
    <li>stuff in here 2</li>
    <li>stuff in here 3</li>
    <li>stuff in here 4</li>
    <li>stuff in here 5</li>
    <li>stuff in here 6</li>
    <li>stuff in here 7</li>
    <li>stuff in here 8</li>
    <li>stuff in here 9</li>
  </ul>`

btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  num++
  magicTrick.innerHTML = `TA-DAH!!!! ${num} <br> ${state} <br> ${listDisplay}`
})

//* This displays a second counter
let timeVariable = 0
setInterval(() => {
  timer.innerHTML = `${timeVariable++}`
}, 1000)

console.log(btn);