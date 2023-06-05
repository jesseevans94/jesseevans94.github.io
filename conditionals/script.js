// if statement 
if (true) {console.log('Hello')
}

// evaluate expressions

const x = 10
const y = 5

// if (x >= y) { }

if (x >= y) {
    //   console.log(`${x} is great than or equal to ${y}`)
  }
  
  if (x === y) {
    //   console.log(`${x} is equal to ${y}`)
  } else {
    //   console.log(`${x} is NOT equal to ${y}`)
  }
  
  // else if
  const hour = 20
  
  if (hour < 12) {
    //   console.log('Good Morning')
  } else if (hour < 18) {
    //   console.log('Good Afternoon')
  } else {
    //   console.log('Good Night')
  }
  
  // And
  if (hour >= 7 && hour < 15) {
    //   console.log('It is time to work')
  }
  
  // OR
  if (hour === 6 || hour === 20) {
    //   console.log('Brush your teeth')
  }
  
  // Switch
  const d = new Date()
  const month = d.getMonth()
  const hour = d.getHours()

  switch (month ) { case 1 :
console.log('It is January')
break

case 2 : console.log('It is feb')
break
case 3:

console.log('It is march')
break

default: console.log('It is none of these')
  }
