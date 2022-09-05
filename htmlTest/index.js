// var and const
let x = 'Variable, can change me'
const y = 'Constant, cant change me'

console.log(x, y)

// functions
function doubleValue(n) {
  return n * 2
}

console.log(doubleValue(3))

// arrays
const myArray = [1, 2, 3, 4, 5]
myArray[2] = 'replaced value'

// iteration
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

for (let element of myArray) {
  console.log(element)
}

myArray.forEach((value, index, theWholeArray) => {
  console.log(value)
})


// lambdas (these are the same)
function myFunction1(arg1, arg2) {
  return arg1 + arg2
}

const myFunction2 = (arg1, arg2) => {
  return arg1 + arg2
}

const myFunction3 = (arg1, arg2) => arg1 + arg2

// types
console.log(typeof true)
console.log(typeof 1)
console.log(typeof '2131')
console.log(typeof {})
console.log(typeof [], Array.isArray([]))
console.log(typeof myFunction1)


// array methods
const someArray = [1, 2, 3]
someArray.forEach(value => {
  console.log(value)
})

const reversedArray = someArray.reverse()

const doubledArray = someArray.map(value => value * 2)

console.log(reversedArray, doubledArray)

const sortedArray = [1, 9, 2, 0, 1, 3, 2].sort((o1, o2) => o1 - o2)

console.log(sortedArray)


// objects / dictionaries
const myObject = {
  someField: 123,
  someOtherField: '12321321',
  someMember: {
    membersField: 123
  }
}

console.log(myObject, myObject.someMember.membersField, myObject['someMember']['membersField'])

// classes
class Guy {

  constructor(name) {
    this.name = name
  }

  introduce() {
    console.log(`Hello my name is ${this.name}!`)
  }

}

const lukasz = new Guy('Lukasz')

lukasz.introduce()


// old school classes
function GuyFn(name) {
  this.name = name;
  this.introduce = function() {
    console.log(`Hello my name is ${this.name}! Im also a very old!`)
  }
}

const oldLukasz = new GuyFn('Old Lukasz')

oldLukasz.introduce()

// desconstructors / deconstruction
const myObject2 = {
  someField: 123,
  someOtherField: 'Hello',
  a: 123213,
  ddsa: 3213,
  add: 123213
}

const { someField, someOtherField } = myObject2

console.log(someField, someOtherField)


const myArray2 = ['Hello', 'Lukasz', 123]

const [greetings, name, number] = myArray2

console.log(greetings, name, number)