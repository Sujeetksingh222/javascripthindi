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
// **************Operations ***************//
// let value =3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
// let str1 = "hello"
// let str2 = " sujeet"
// let str3 = str1+str2;
// console.log(str3);

// console.log("1" +2);//12
// console.log(1 + "2");//12
// console.log("1" + "2");//12
// console.log("1" + 2 + 2);// 122
// console.log(1+2+"2");// 32
// // agar pahle string ho to sabhi ko string me convert kar diya jayega
// // agar pahle string na ho to pahle value calculate hoga aur fhir agar string ho to string convert ho jayega
// console.log(3+ 4*5 %3);
console.log(true);//true
console.log(+true);//1
console.log(+"");//0
// Assignment operator
// let num1,num2,num3
// num1 = num2 = num3=2+2
// console.log(num1);
// console.log(num2);
// console.log(num3);
let gamecounter = 100
gamecounter++;//101
++gamecounter;//102
console.log(gamecounter);
