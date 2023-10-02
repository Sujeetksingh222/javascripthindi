let score = "33"
console.log(typeof(score))// string
let ValueInNumber = Number(score) // conversion of string to number
console.log(typeof ValueInNumber)
let p = "33abc"
let x =Number(p)
console.log(x) // it gives NAN value because 33 gets converted in number but abc not  converted into number

let pic = null
let cop = Number(pic)
console.log(cop);// it outputs 0
let un = undefined
let und = Number(un)
console.log(und);// it outputs NaN
let bool = true;
console.log(Number(bool));// it outputs 1
/*     Notes:
conversion of different data types into Number data types
input=>output
"33"=>33
"33abc"=>NaN
true=>1; false=0;
undefined=>Nan
*/
let IsLoggedIn = 1
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);
let empty =""
console.log(Boolean(empty));
/* conversion of differnent data types in Boolean 
input => output
1=>true; 0=>false
""=>false
"Sujeet"=>true

*/
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
