// global window object
console.log(window)

// Global window object
console.log(window)

// We can access DOM elements directly with properties
console.log(document.body)
console.log(document.links[0])

// Simple way to write to the DOM, but cannot be controlled.
document.write('Hello from JavaScript')

// We have methods to select elements more directly.
document.querySelector('h2').innerHTML = '<h2>Hello From Main</h2>'

document.querySelector('#main h1').innerText = 'This is my house'

