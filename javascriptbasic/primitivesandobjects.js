/*  primitive data types :
  1. NULL
  2.Number
  3.String
  4.Symbol
  5.Undefined
  6.Boolean
  7.Byte
  NN BB SS U
*/
let a=null;
let b= 345;
let c= true;// can also be false
let d= BigInt("567")
let e = "Harry"
let f = Symbol("I am nice boy")
let g = undefined
console.log(a,b,c,d,e,f,g,);
// Object:-it is key-value pair.
// it is non-primitive data types
const item={
    "harry":true,
    "Subh":false,
    "Lovish":67,
    "Rohan":undefined
}

console.log(item["harry"])
