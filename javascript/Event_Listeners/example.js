//? Capture goes down the tree first, bubble goes upp the tree second

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const grandchild = document.querySelector('.grandchild');
const greatGrandchild = document.querySelector('.greatGrandchild');
const baby = document.querySelector('.baby')

/* parent.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('Parent 3 capture');
}, { capture: true }) */

parent.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('Parent 3 bubble');
})

/* child.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('Child 2 capture');
}, { capture: true}) */

child.addEventListener('click', evt => {
  evt.preventDefault()
  // evt.stopPropagation()⬅⬅ stops propagation
  console.log('Child 2 bubble');
})

/* grandchild.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('Grandchild 1 capture');
}, {capture: true}) */

grandchild.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('Grandchild 1 bubble');
})

greatGrandchild.addEventListener('click', evt => {
  evt.preventDefault()
  console.log('greatGrandchild 1 ran once!');
}, { once: true })


baby.addEventListener('click', printSup)



function printSup() {
  console.log('Should be removed after 2 clicks');
}


let counter = 3
function removeBaby() {

  if (counter === 0) {
    baby.removeEventListener('click', printSup)
  }
  counter = counter - 1
  console.log('counter :>> ', counter);
}

function alertPop() {
  alert('Does this work?')
}