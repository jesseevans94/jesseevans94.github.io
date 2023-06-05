let x

// object literal
const person = { name: 'Devin Hollis',
  age:21, isAlive: true, address: { street: '123 street', city: 'Boston', state: 'MA'}, 

  hobbies: ['coding', 'music', 'drawing']
}

// access the properties

x = person.name
x = person.age
x = person.isAlive
x = person.address.street
x = person.hobbies[0]

// update the properties
person.name = 'Karita'
person['name'] = 'Aaron'
x = person.name

// delete props

delete person.age

console.log()

