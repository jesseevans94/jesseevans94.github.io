// define a function
// function 
sayHello() { console.log('Hello World')}

//  invoke, execute or call a function
sayHello()

// define a function with parameters
function add(num1, num2) { console.log(num1 + num2)
}

// invoke function with arguments
add(5, 50)

function subtract(num1, num2)
{ return num1 - num2}


const result = subtract(10, 2)

console.log(subtract (20, 5))

let x = 500

console.log(x, 'in global')

function run(){ x = 200 
    console.log(x, 'in function')}

    x=300 console.log(x, 'in global')

    run() 




