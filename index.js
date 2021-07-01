// Write your solution in this file!

//1
var customerName = "bob";
console.log("test 1: " + customerName)

//2
function upperCaseCustomerName() {
    return customerName.toUpperCase()
}
console.log("test 2: " + upperCaseCustomerName())

//3
var bestCustomer;
console.log("test 3: " + bestCustomer)
function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}
console.log("test 3: " + setBestCustomer())

//4
function overwriteBestCustomer(value = '') {
    bestCustomer = value
    return bestCustomer
}
console.log("test 4: " + overwriteBestCustomer('maybe bob'))

//5 
const leastFavoriteCustomer = "definetly bob"
console.log("test 5: " + leastFavotriteCustomer)
function changeLeastFavoriteCustomer() {
    //leastFavotriteCustomer = 'uncertianly bob'
    leastFavoriteCustomer = 'uncertianly bob'
}
console.log("test  5: " + changeLeastFavoriteCustomer())