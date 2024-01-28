// Hello World
console.log("Hello World");

// Variables
var firstName = "John"
let lastName = "Smith"
console.log(firstName)

var age, dateOfBirth, sex
age = "5"
sex = "Male"
console.log(age)
age = "6"
console.log(age)

//constants
const occupation = "Engeneer"
console.log(occupation)

//data types
var middleName = 'David' //string
var ageOfBorther = 25 //number
var isHeMarried = false //boolean
var yearsInMarrige = null //null
var numberOfCars = undefined //undefined

//Concatination and Interpolation
var price = 55
var itemName = "Table"
var messageToPrint = 'The price for your '+itemName+' is '+price+' dollars' //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageToPrint);
console.log(messageToPrint2)

//objects
var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
// Dot notation
customer.firstName = 'Mike'

// Bracket notation
customer['lastName'] = "Silver"

console.log(`${customer['lastName']} ${customer.firstName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[0] = "BMW"
console.log(car[0])

// Relational or comarison operators

// > - more then
// < - less then
// >= - more than equal
// <= - less then equal

var result = 5 <= 5
console.log(result)

//equality operators
var x = 1
console.log(x == '1') // lose comparison
console.log(x === '1') // strict comparison

//Logical "AND"
console.log(true && true) //all values have to be TRUE for expression to be TRUE

// Logcal "OR"
console.log(false || false) //any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCiti = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCiti
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense)

//Logical "NOT"
console.log(!true)
console.log(6 !== 10)

// Conditional statment

//if(condition) {
    //execute some code here
//} else {
    //execute some code here
//}

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise print "Good Evning"
var hour = 19

if(hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Evning')
}

var ageIsMoreThanEighteen = true
var isUSCiti = false

if(ageIsMoreThanEighteen && isUSCiti) {
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer is NOT eligible ')
}

// Declarative function
helloOne()
function helloOne(){
    console.log('Hello one!')
}
//helloOne()

// Anonymus function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
    console.log(name, lastName)
}
printName('Victor', 'D')

//Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

//import function 
import { nameOfExportFunction } from '.../'

//import everything 
import * as helper from '.../'
//helper.nameOfExportFunction

export class CustomerDeatsild {
    /**
     * This method will print the first name
     * @param {*} firstName 
     */
    printFirstName(firstName){
        console.log(firstName)
    }
    /**
     * This method will print the last name
     * @param {*} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

import { CustomerDeatsild } from "./printHelper.js";

var customerDeatails = new CustomerDeatsild()
customerDeatails.printFirstName('Steve')
customerDeatails.printLastName('Smith')