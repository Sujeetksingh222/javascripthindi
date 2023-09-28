// constant is data type whose value can not be used.
const accountID = 144553;
// let is used to declare the varible
let accountEmail = "sujeetksingh222@gmail.com";
// we can use var and let to declare the variable
// we can ignore var to declare variable
/* 
prefer not to use var 
because of issue block scope and funtional scope
*/
var accountPassword = "12345";
accountCity = "Jaipur";// also this allowed
// but don't do it
let accountState;

// accountID = 2 // const can not be changed 
accountEmail = "ramesh@gmail.com"
accountPassword = "1234567"
accountCity = "Banglore"
console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])