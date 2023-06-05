const button = document.querySelector('button')
const div = document.querySelector('div')

function buttonClicked() {
  alert('Suck my balls mr. garrison')
}

function increaseFont() {
  div.style.fontSize = '80px'
}

function decreaseFont() {
  div.style.fontSize = '16px'
}

button.addEventListener('click', buttonClicked)

div.addEventListener('mouseover', increaseFont)
div.addEventListener('mouseout', decreaseFont)

