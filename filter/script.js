const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})

const evenNumbers2 = numbers.filter((number) => number % 2 === 0)

const evenNumbers3 = []
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers3.push(number)
  }
})

console.log(evenNumbers)
console.log(evenNumbers2)
console.log(evenNumbers3)
console.log(numbers)

// Array of objects
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
]

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
)

console.log(retailCompanies)

const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
)

console.log(earlyCompanies)


- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz".