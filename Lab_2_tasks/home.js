// 1. How to run your first Program with Javascript

console.log('hello')

//alert('hello this is qazi')

// 2. Variables

var b = 'smoothie'
console.log(b)

var someNumber = 45
console.log(someNumber)



var age =prompt('what is your age?')

document.getElementById('someText').innerHTML=age

// 3. Numbers in Javascript

var num1 = 10

// Increment num1 by 1
num1++
console.log(num1)

// Decrement num1 by 1
num1--
console.log(num1)
// divide, multiply *, remainder % 
console.log(num1 % 6)

// Increment/Decrement by any number you want
num1 += 10
console.log(num1)

num1 -= 5
console.log(num1)

/* 4. Functions

1. Create a function 
2. call a function
*/
function fun() {
    console.log('this is a function')
}
fun()

/* Let's create a function that take in name and says
hello followed  by your name
 */
/*
function greeting(yourName){
    var result ='hello'+' '+yourName
    console.log(result)
}

var name = prompt('what is your name?')
greeting(name)
*/
// How do arguments work in function?
// How do we add two numbers together in function?

function sumNumbers(a, b) {
    var result = a + b
    console.log(a + b)
}
sumNumbers(10, 20)

// 5. Loops in Javascript

/* While loops

var num=0

while(num<100){
    num+=1
    console.log(num)
}
*/

// For Loop
for (let num = 0; num < 100; num++) {
    console.log(num)
}

// 6. Data Types in Javascript

let yourAge = 18 //number
let yourName = 'Adeem' //string
let name = { first: 'Jawad', last: 'Adeem' } //object
let truth = false //boolean
let groceries = ['apple', 'banana', 'orange'] //array
let random //undefined
let notthing = null //value null

// 7. Strings in javascript (common methods)

let fruit = 'banana,apple,orange,blackberry'
let morefruits = 'banana\napple'
console.log(morefruits)
console.log(fruit.length)
console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2, 6))
console.log(fruit.replace('ban', '123'))
console.log(fruit.toUpperCase(fruit))
console.log(fruit.charAt(2))
console.log(fruit.split(',')) //split by comma 
console.log(fruit.split('')) //split by character

// 8. Arrays in Javascript

let fruits = ['banana', 'apple', 'orange', 'pineapples']
fruits = new Array('banana', 'apple', 'orange', 'pineapples')

console.log(fruits[2]) // accessing value

fruits[0] = 'pear'
console.log(fruits)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// array common methods
console.log('to string', fruits.toString())
console.log(fruits.join('*'))
console.log(fruits.pop(), fruits) // removes last item
console.log(fruits.push('blackberries'), fruits) // appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit' // same as push
console.log(fruits)
fruits.shift() //removes first item of an array
console.log(fruits)
fruits.unshift('kiwi') //add first item of an array
console.log(fruits)

let vegetables = ['asparagus', 'tomato', 'broccoli']

let allGroceries = fruits.concat(vegetables)
console.log(allGroceries)
console.log(allGroceries.slice(1, 4))
console.log(allGroceries.reverse())
console.log(allGroceries.sort())

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2]
console.log(someNumbers.sort(function (a, b) { return a - b })) //sorted in ascending order
console.log(someNumbers.sort(function (a, b) { return b - a })) //sorted in descending order

let emptyArray = new Array()
for (let num = 0; num < 10; num++) {
    emptyArray.push(num)
}
console.log(emptyArray)

// 9. Objects in javascript
// Dictionaries in python
let students = {
    first: 'Rafeh',
    last: 'Qazi',
    age: 25,
    height: 170,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age
    }
}
//console.log(students.first)
//console.log(students.last)
//students.first='notRafeh' // change value
//console.log(students.first)
//students.age++
//console.log(students.age)

console.log(students.studentInfo())

// 10. conditionals, control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR

/*
var age=prompt('what is your age?')
if ((age>=18) && (age<=35)){
    status ='target demo'
    console.log(status)
}
else{
    status='not my audience'
    console.log(status)
}
*/

// switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday --> weekday
// day 3 --> wednesday --> weekday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekend
// day 6 --> Saturday --> weekend

switch (6) {
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'weekend'
        break;
    default:
        text = 'weekday'
}
console.log(text)
