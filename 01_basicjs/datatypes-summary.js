// data type is categories based on how it is stored in memeory and how it access
 /*1.primitive 
 7 types:1.string 
         2. Number
         3.Boolean
         4.null
         5.undefined
         6.Symbol
         7.BigInt

*/
/*2. Reference(Non-primitive)
1.Array
2.Objects
3.Functions
*/
// java script is dynamic type language.no need to tell data type of varible.
const score = 100
const scoreValue =100.3
const isLoggedIn = false;
const outsideTemp = null
let userEmail=undefined;
const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id==anotherId);
//const bigNumber = 34564326847889789
// array
const heros =["shaktiman","naagraj","doga"]
// object
let myobj={
    name: "sujeet",
    age: 22
}
// function
const myfunction=function(){
    console.log("Hello World");
}
// how to find data type of anything
// typeof is used to find data types of any variable
console.log(typeof myfunction);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof myobj);
console.log(BigInt);
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object 
*/


